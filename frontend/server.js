const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* =====================
   PROFILE API
===================== */
app.get("/api/profile", (req, res) => {
  res.json({
    name: "Таны нэр",
    title: "Junior Developer",
    bio: "Hello, I'm a junior developer.",
    skills: ["Flutter", "Node.js", "MongoDB", "Express", "JavaScript"]
  });
});

/* =====================
   ADMIN SYSTEM
===================== */

let projects = [];
let messages = [];

const ADMIN = {
  username: "admin",
  password: "1234"
};

// LOGIN
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN.username && password === ADMIN.password) {
    return res.json({ success: true, token: "admin-token" });
  }

  res.status(401).json({ success: false });
});

// AUTH MIDDLEWARE
function auth(req, res, next) {
  const token = req.headers.token;

  if (token !== "admin-token") {
    return res.status(403).json({ error: "Unauthorized" });
  }

  next();
}

/* =====================
   PROJECTS API
===================== */

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.post("/api/projects", auth, (req, res) => {
  projects.push(req.body);
  res.json({ success: true });
});

app.delete("/api/projects/:id", auth, (req, res) => {
  projects.splice(req.params.id, 1);
  res.json({ success: true });
});

/* =====================
   CONTACT / MESSAGES
===================== */

app.post("/api/contact", (req, res) => {
  messages.push(req.body);
  res.json({ success: true });
});

app.get("/api/messages", auth, (req, res) => {
  res.json(messages);
});

/* =====================
   FRONTEND
===================== */

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/* =====================
   START SERVER
===================== */

app.listen(3000, () => {
  console.log("🚀 Server running: http://localhost:3000");
});
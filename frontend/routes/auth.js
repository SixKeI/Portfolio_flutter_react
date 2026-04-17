const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    const token = jwt.sign({ user: "admin" }, process.env.JWT_SECRET);
    return res.json({ token });
  }

  res.status(401).send("Invalid");
});

module.exports = router;
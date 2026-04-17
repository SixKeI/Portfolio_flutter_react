const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// DB
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Backend running on", PORT);
});

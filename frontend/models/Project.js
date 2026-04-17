const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  desc: String,
  tech: String
});

module.exports = mongoose.model("Project", projectSchema);
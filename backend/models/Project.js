const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: String,
  desc: String,
  tech: String
});

module.exports = mongoose.model("Project", schema);
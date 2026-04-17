const express = require("express");
const Project = require("../models/Project");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await Project.find());
});

router.post("/", auth, async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

router.delete("/:id", auth, async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
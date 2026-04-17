const express = require("express");
const Message = require("../models/Message");

const router = express.Router();

router.post("/", async (req, res) => {
  const msg = new Message(req.body);
  await msg.save();
  res.json({ success: true });
});

router.get("/", async (req, res) => {
  res.json(await Message.find());
});

module.exports = router;
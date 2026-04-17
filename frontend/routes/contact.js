const express = require("express");
const Message = require("../models/Message");

const router = express.Router();

router.post("/", async (req, res) => {
  const msg = new Message(req.body);
  await msg.save();
  res.json({ success: true });
});

module.exports = router;
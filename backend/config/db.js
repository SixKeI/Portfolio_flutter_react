const mongoose = require("mongoose");

module.exports = async function connectDB() {
  try {
    console.log("MONGO_URL =", process.env.MONGO_URL);

    await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB connected");
  } catch (err) {
    console.log("DB ERROR:", err.message);
    process.exit(1);
  }
};

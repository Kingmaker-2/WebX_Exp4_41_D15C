const mongoose = require("mongoose");

// Define Student Schema
const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  grade: { type: String, required: true },
});

// Export Model
module.exports = mongoose.model("Student", StudentSchema);

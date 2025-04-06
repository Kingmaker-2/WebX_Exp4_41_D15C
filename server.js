const dotenv = require("dotenv")
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config()

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Connect to MongoDB
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/studentsDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Error connecting to MongoDB:", err));

// Routes
const studentRoutes = require("./routes/studentRoutes");
app.use("/students", studentRoutes);

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

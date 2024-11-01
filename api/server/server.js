require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes"); // Import the auth routes

const app = express();
const dbURI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3001;

console.log("MongoDB URI:", dbURI);

// MongoDB Connection
mongoose
  .connect(dbURI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(express.static("public"));

// Routes
app.use("/auth", authRoutes); // Use the auth routes for signup and login

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(
      `Port ${PORT} is already in use. Try using a different port.`
    );
  } else {
    console.error("Server error:", err);
  }
});

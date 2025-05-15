const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// Routes
const authRoutes = require("./routes/auth");
const otpRoutes = require("./routes/otpRoutes");

// Mount routes
app.use("/api", authRoutes);
app.use("/api2", otpRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed", err);
  });

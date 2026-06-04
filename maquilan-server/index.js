require("dotenv").config(); // [cite: 199]
const express = require("express"); // [cite: 200]
const cors = require("cors"); // [cite: 201]
const connectDB = require("./config/db"); // [cite: 205]
const userRoutes = require("./routes/userRoutes"); // [cite: 206]
const articleRoutes = require("./routes/articleRoutes"); // [cite: 207]

const app = express(); // [cite: 208]

// Connect to MongoDB
connectDB(); // [cite: 209]

// Express Built-in Middleware for JSON
app.use(express.json()); // [cite: 210]

const corsOptions = {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions)); // Clean implementation [cite: 224]

// API Endpoints
app.use("/api/users", userRoutes); // [cite: 239]
app.use("/api/articles", articleRoutes); // [cite: 240]

// Global Error Handler Middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // [cite: 243]
    res.status(500).json({ message: "Server Error" }); // [cite: 245]
});

module.exports = app; // [cite: 248]
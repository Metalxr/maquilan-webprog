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
    origin: "http://localhost:5173", // URL of your Vite frontend development server
    credentials: true, // [cite: 219]
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"], // [cite: 220]
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"], // [cite: 220]
    optionsSuccessStatus: 204 // [cite: 222]
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

const PORT = process.env.PORT || 8000; // [cite: 246, 247]
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // [cite: 248]
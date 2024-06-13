const express = require("express");
const connectToMongoDB = require("./db/connectToMongoDB");
const authRoutes = require("./routes/authRoutes");
const app = express();
const dotenv = require("dotenv");

// Middleware
app.use(express.json()); 
dotenv.config();

// Connect to MongoDB
connectToMongoDB();

// Routes
app.use("/api/auth", authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));

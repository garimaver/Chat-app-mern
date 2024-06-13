const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use("/api/auth", authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));

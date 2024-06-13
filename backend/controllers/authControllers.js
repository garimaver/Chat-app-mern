const User = require("../models/User");

const signup = async (req, res) => {
    const { fullName, username, password, gender, profilePic } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        // Create a new user
        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePic : gender === "male" ? boyProfilePic : girlProfilePic
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error signing up user:", error.message);
        res.status(500).json({ message: "Server error" });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if username exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Validate password
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Error logging in user:", error.message);
        res.status(500).json({ message: "Server error" });
    }
};

const logout = (req, res) => {
    try {
        // Your logout logic here
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error("Error logging out user:", error.message);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    signup,
    login,
    logout
};

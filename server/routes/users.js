const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../model/usermodel");

router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;

        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        user = new User({ username, password });
        await user.save();

        const payload = { userId: user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: "Error in registration" });
    }

});

router.post("/authenticate", async (req, res) => {
    try {
        const { username, password } = req.body;

        let user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Authentication failed. User not found." });
        }

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Authentication failed. Invalid password." });
        }

        const payload = { userId: user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: "Error in authentication" });
    }
});


module.exports = router;
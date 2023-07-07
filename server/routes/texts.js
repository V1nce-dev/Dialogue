const express = require("express");
const router = express.Router();
const Text = require("../model/textmodel");

router.post("/", async (req, res) => {
    try {
        const text = new Text({ text: req.body.text });
        await text.save();
        res.status(201).json(text);
    } catch (error) {
        return res.status(500).json({ message: "Error in post" })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const text = await Text.findByIdAndRemove(req.params.id);
        if (!text) {
            return res.status(404).json({ message: "Text not found" })
        }
        res.json({ message: "Post has been deleted" });
    } catch (error) {
        return res.status(500).json({ message: "Can not delete" })
    }
})

module.exports = router;
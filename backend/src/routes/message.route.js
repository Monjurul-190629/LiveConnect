import express from "express";

const router = express.Router();

router.get("/message", (req, res) => {
    res.send("Message is comming");
})

export default router;
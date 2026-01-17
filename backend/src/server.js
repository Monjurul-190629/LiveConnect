import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;


// For Auth
app.use("/api/auth", authRoutes);

// For message
app.use("/api", messageRoutes);

app.get("/", (req, res) => {
  res.send("Server is running properly");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

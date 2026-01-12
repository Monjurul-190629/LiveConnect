import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is running properly");
});

app.get("/api/signup", (req, res) => {
  res.send("Signup endpoint");
});

app.get("/api/login", (req, res) => {
  res.send("Login endpoint");
});

app.get("/api/logout", (req, res) => {
  res.send("Logout endpoint");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express from "express";
import dotenv from "./config/dotenv";

const app = express();
const port = process.env.PORT;

// Start Server
app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
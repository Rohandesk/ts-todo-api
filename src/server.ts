import express from "express";
import dotenv from "./config/dotenv";
import connectionMongoDB from "./connection.ts";

const app = express();
const port = process.env.PORT;
connectionMongoDB();

// Start Server
app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
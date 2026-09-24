import express from "express";
import dotenv from "./config/dotenv";
import connectionMongoDB from "./connection.ts";
import todoRouter from "./routes/todo-routes";

const app = express();
const port = process.env.PORT;
connectionMongoDB();
app.use(express.json());
app.use("/todos", todoRouter);

// Start Server
app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
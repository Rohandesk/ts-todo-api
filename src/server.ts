import express from "express";
import dotenv from "./config/dotenv";
import connectionMongoDB from "./connection.ts";
import todoRouter from "./routes/todo-routes";
import {apiLogger} from "./middleware/loggerMiddleware";;

const app = express();
const port = process.env.PORT;
connectionMongoDB();
app.use(apiLogger);
app.use(express.json());
app.use("/todos", todoRouter);
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

// Start Server
app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
import express from "express";
import  {TodoController}  from "../controller/todo-controller";

const todoRouter = express.Router();
todoRouter.post("/todo", TodoController.create);
export default todoRouter;
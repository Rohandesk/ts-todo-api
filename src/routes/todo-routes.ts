import express from "express";
import  {TodoController}  from "../controller/todo-controller";

const todoRouter = express.Router();
todoRouter.post("/todo", TodoController.create);
todoRouter.get("/todos", TodoController.getAllTodos);
todoRouter.get("/todos/:id", TodoController.getParticularTodo);
export default todoRouter;
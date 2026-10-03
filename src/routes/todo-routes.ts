import express from "express";
import  {TodoController}  from "../controller/todo-controller";

const todoRouter = express.Router();
todoRouter.post("/", TodoController.create);
todoRouter.get("/", TodoController.getAllTodos);
todoRouter.get("/:id", TodoController.getParticularTodo);
todoRouter.delete("/:id", TodoController.deleteTodo);
todoRouter.put(":id", TodoController.updateTodo);
export default todoRouter;
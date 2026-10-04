import express from "express";
import  {TodoController}  from "../controller/todo-controller";
import {checkpassObjectId} from "../middleware/checkObjectId";

const todoRouter = express.Router();
todoRouter.post("/", TodoController.create);
todoRouter.get("/", TodoController.getAllTodos);
todoRouter.get("/:id", checkpassObjectId('id'), TodoController.getParticularTodo);
todoRouter.delete("/:id",checkpassObjectId('id'), TodoController.deleteTodo);
todoRouter.put("/:id", TodoController.updateTodo);
export default todoRouter;
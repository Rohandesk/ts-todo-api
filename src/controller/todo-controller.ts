import { Todo } from "../models/todo-schema";
import {createTodoSchema} from "../models/todo-schema";
import throwError from "../utils/throwError";
import mongoose from"mongoose";

export const TodoController = {
  create: async (
    req: Request<{}, {}, CreateTodoInput>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const validation = createTodoSchema.safeParse(req.body);
      switch(true){
        case !validation.success:
          throwError(400 , "Invalid todo data", next);
          break
        default:
          const newToDo = new Todo({ title: req.body.title });
          const result = await newToDo.save();
          res.status(201).json(result);
          break;
      }
    } catch (error) {
      throwError(500 , "Internal Server Error", next);
    }
  },

  getAllTodos: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const todos = await Todo.find();
      res.status(200).json(todos);
    } catch (error) {
      throwError(500 , "Internal Server Error", next);
    }
  },

  getParticularTodo: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const todoId = req.params.id;
      const todoData = await Todo.findById(todoId);
      switch(true){
        case !todoData:
          throwError(404 , "Todo Id not found", next);
          break;
        default:
          res.status(200).json(todoData);
          break;
      }
    } catch (error) {
      throwError(500 , "Internal Server Error", next);
    }
  },

  deleteTodo: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const todoIdToDelete = req.params.id;
      const deletedTodo = await Todo.findByIdAndDelete(todoIdToDelete);
      switch(true){
        case !deletedTodo: 
          throwError(404 , "Todo Id not found", next);
        break;
        default:
          res.status(200).json({message : "Todo deleted successfully"});
          break;
      }
    } catch (error) {
      throwError(500 , "Internal Server Error", next);
    }
  },

  // update api
  updateTodo: async( req: Request, res: Response): Promise<void> => {
    try {
      const todoIdToUpdate = req.params.id;
      const todoDataToUpdate = req.body;
      const updateTodo = await Todo.findByIdAndUpdate({_id: todoIdToUpdate }, todoDataToUpdate);
      switch(true){
        case !updateTodo:
          throwError(404 , "Todo Id not found", res);
          break;
        default:
          res.status(200).json({message: "Todo updated successfully"});
          break;
      }
    } catch (error) {
      throwError(500 , "Internal Server Error", res);
    }
  }
};

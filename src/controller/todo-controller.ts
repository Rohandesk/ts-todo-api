import { Todo } from "../models/todo-schema";

export const TodoController = {
  create: async (
    req: Request<{}, {}, CreateTodoInput>,
    res: Response,
  ): Promise<void> => {
    try {
      const newToDo = new Todo({ title: req.body.title });
      const result = await newToDo.save();
      res.status(201).json(result);
    } catch (error) {
      console.error("Error creating todo:", error);
      res.status(500).json({ error: error });
    }
  },

  getAllTodos: async (req: Request, res: Response): Promise<void> => {
    try {
      const todos = await Todo.find();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  getParticularTodo: async (req: Request, res: Response): Promise<void> => {
    try {
      const todoId = req.params.id;
      const todoData = await Todo.findById(todoId);
      res.status(200).json(todoData);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  deleteTodo: async (req: Request, res: Response): Promise<void> => {
    try {
      const todoIdToDelete = req.params.id;
      const deletedTodo = await Todo.findByIdAndDelete(todoIdToDelete);
      switch(true){
        case !deletedTodo: 
        res.status(404).json({ message: "Todo Id not found"});
        break;
        default:
          res.status(200).json({message : "Todo deleted successfully"});
          break;
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  // update api
  updateTodo: async( req: Request, res: Response): Promise<void> => {
    try {
      const todoIdToUpdate = req.params.id;
      const todoDataToUpdate = req.body;
      const updateTodo = await Todo.findByIdAndUpdate({_id: todoIdToUpdate }, todoDataToUpdate);
      res.status(200).json({message: "Todo updated successfully"});
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};

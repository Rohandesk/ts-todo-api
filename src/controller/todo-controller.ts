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
  }
};

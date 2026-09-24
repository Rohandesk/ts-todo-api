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
};

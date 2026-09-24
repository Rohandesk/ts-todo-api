import { Document, Model, Schema, model, Types } from "mongoose";
import { z } from "zod";

export interface ITodo extends Document {
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Zod validation schema
export const createTodoSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(100, "Title must be at most 100 characters"),

  description: z
    .string()
    .optional(),

  completed: z
    .boolean()
    .default(false),

  dueDate: z
    .coerce
    .date()
    .optional(),
});

export type CreateTodoInput = z.infer<typeof createTodoSchema>;

// Mongoose schema
const TodoSchema: Schema<ITodo> = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    description: {
      type: String,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    dueDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const Todo: Model<ITodo> = model<ITodo>("Todo", TodoSchema);

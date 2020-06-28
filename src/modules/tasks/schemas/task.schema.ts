import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    completed: Boolean
  },
  {
    collection: 'tasks',
    read: 'nearest'
  }
);

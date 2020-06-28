import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { TaskDto } from './dto/task.dto';

@Component()
export class TasksService {
  constructor(
    @Inject('TaskModelToken') private readonly taskModel: Model<Task>
  ) {}

  async create(newTaskDto: TaskDto): Promise<Task> {
    console.log(999, newTaskDto)
    const newTask = new this.taskModel(newTaskDto);
    return await newTask.save();
  }

  async findAll(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }

  async findOne(name: string): Promise<Task[]> {
    return await this.taskModel.find({
      name
    }).exec();
  }

  async deleteOne(name: string): Promise<void> {
    return await this.taskModel.deleteOne({
      name
    }).exec();
  }

  async markAsCompleted(name: string): Promise<void> {
    return await this.taskModel.updateOne({
      name
    }, {
      $set: {
        completed: true
    }}).exec();
  }
}

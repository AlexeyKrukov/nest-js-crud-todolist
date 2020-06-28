import { Body, Controller, Get, Post, Param } from '@nestjs/common';

import { TasksService } from './tasks.service';
import { TaskDto } from './dto/task.dto';
import { Task } from './interfaces/task.interface';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get('find/:name')
  async findOne(@Param('name') name): Promise<Task[]> {
    return this.taskService.findOne(name);
  }

  @Post('delete')
  async deleteOne(@Body() taskDto: TaskDto): Promise<void> {
    return this.taskService.deleteOne(taskDto.name);
  }

  @Post('markAsCompleted')
  async markAsCompleted(@Body() taskDto: TaskDto): Promise<void> {
    return this.taskService.markAsCompleted(taskDto.name);
  }

  @Post('create')
  async create(@Body() newTaskDto: TaskDto) {
    newTaskDto.completed = false;
    this.taskService.create(newTaskDto);
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

}

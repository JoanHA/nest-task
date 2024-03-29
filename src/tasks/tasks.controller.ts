import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './tasks-status.enum';
import { CreateTaskDto } from './DTO/create-taskDto';
import { GetTaskFilterDto } from './DTO/get-task-filter.dto';
import { UpdateTaskStatusDto } from './DTO/update-task.dto';
import { Task } from './task.entity';
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query() filterDto :GetTaskFilterDto ): Task[] {

  //   if(Object.keys(filterDto).length){
  //     return this.tasksService.getTaskWithFilter(filterDto)
  //   }
  //   return this.tasksService.getAllTask();
  // }
  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto) {
  //   return this.tasksService.createTask(createTaskDto);
  // }

  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }
  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   this.tasksService.deleteTask(id);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDto
  //   ):Task {
  //     const {status} = updateTaskStatusDto;
  //   return this.tasksService.updateTask(id, status);
  // }
}

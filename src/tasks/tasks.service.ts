import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './tasks-status.enum';
import { CreateTaskDto } from './DTO/create-taskDto';
import { GetTaskFilterDto } from './DTO/get-task-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}
  // public getAllTask(): Task[] {
  //   return this.tasks;
  // }
  // public getTaskWithFilter(filterDto: GetTaskFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTask();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) =>
  //       task.title.toLowerCase().includes(search.toLowerCase()) ||
  //       task.description.toLowerCase().includes(search.toLowerCase())
  //     );
  //   }
  //   return tasks;
  // }

  public async getTaskById(id: string): Promise<Task> {
    const found = await this.taskRepository.findOneBy({id})
    if (!found) {
      throw new  NotFoundException(`Task with id ${id}  not found`)
      
    }
    return found;
  }
  // public createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // public deleteTask(id: string): void {
  //   const found = this.getTaskById(id)
  //   this.tasks = this.tasks.filter((task) => task.id !== found.id);
  // }
  // public updateTask(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return this.getTaskById(id);
  // }
}

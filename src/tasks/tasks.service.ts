import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './DTO/create-taskDto';
import { GetTaskFilterDto } from './DTO/get-task-filter.dto';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  public getAllTask(): Task[] {
    return this.tasks;
  }
  public getTaskWithFilter(filterDto: GetTaskFilterDto): Task[] {
    const { status, search } = filterDto;
    let tasks = this.getAllTask();
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }
    if (search) {
      tasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase())
          
      );
    }
    return tasks;
  }
  public getTaskById(id: string): Task {
    const found =  this.tasks.find((task) => task.id === id);
    if(!found){
        throw new NotFoundException(`Task with id ${id} not found`);
    }
    
    return found; 
  }
  public createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  public deleteTask(id: string): void {
    const found = this.getTaskById(id)
    this.tasks = this.tasks.filter((task) => task.id !== found.id);
  }
  public updateTask(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return this.getTaskById(id);
  }
}

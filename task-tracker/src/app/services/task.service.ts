import { Injectable } from '@angular/core';
import { Task } from '../../task';
import { Status } from '../../status';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  tasks: Task[] = [
    {
      id: '1',
      title: 'Learn about HTML and SCSS',
      description: 'Learn the basics concepts about HTML and CSS+SCSS',
      status: Status.InProgress,
      assignedTo: 'Andrei',
    },
    {
      id: '2',
      title: 'Create your first Angular app',
      description:
        'Create a new Angular application for managing tasks. You will configure the packages needed for developing the project and then you will define the main components of the application.',
      status: Status.ToDo,
      assignedTo: 'Ioana',
    }
  ];

  getTasks() {
    return this.tasks;
  }

  addTask(newTask: Task) {
    newTask.id = (Math.max(...this.tasks.map(task => parseInt(task.id))) + 1).toString();
    this.tasks.push(newTask);
    console.log(this.tasks);
    return newTask;
  }
  editTask(task: Task): void {
    let i = this.tasks.findIndex((t) => t.id === task.id);
    this.tasks[i] = task;
  }
  deleteTask(id: string): void {
    let i = this.tasks.findIndex((t) => t.id === id);
    this.tasks.splice(i, 1);
  }

}

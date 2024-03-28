import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { TaskService } from '../app/services/task.service';
import { Task } from '../task';
import { Status } from '../status';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule,RouterLink,MatButton,],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  taskTitle:string
  taskDescription:string
  taskAssignedTo:string
  router:Router = new Router

  onSubmit():void{
    const aux:Task = {
      id: "-1",
      title: this.taskTitle,
      description: this.taskDescription,
      status: Status.ToDo,
      assignedTo: "No one"
    };
    this.taskService.addTask(aux);
    this.router.navigate(['']);
  }

    constructor(
    private taskService: TaskService,
  ) {}

}

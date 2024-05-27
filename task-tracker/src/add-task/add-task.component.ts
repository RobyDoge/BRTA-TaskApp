import { Component, Input,Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { TaskService } from '../app/services/task.service';
import { Task } from '../task';
import { Status } from '../status';
import { NgModule } from '@angular/core';
import { NotificationService } from '../app/notification.service';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule,RouterLink,MatButton,],
  providers: [TaskService],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  taskTitle:string
  taskDescription:string
  taskAssignedTo:string
  router:Router = new Router

  onSubmit():void{
    const newTask:Task = <Task>{
      name: this.taskTitle,
      description: this.taskDescription,
      status: Status.ToDo,
      assignedTo: "No one"
    };
    if(this.taskAssignedTo != "")
    {
      newTask.assignedTo = this.taskAssignedTo;
    
    }
    this.taskService.addTask(newTask)
      .subscribe(task => {
        this.notificationService.sendMessage("BroadcastMessage", [task])
      });

    // this.taskService.addTask(newTask)
    //   .subscribe(task => {
    //     console.log('Task added successfully:', task);
    //     this.router.navigate(['/']);
    //   });

  }

    constructor(
    private taskService: TaskService,
    @Inject(NotificationService) private notificationService: NotificationService
  ) {}

}

import { Component, Input,Inject, OnInit } from '@angular/core';
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
export class AddTaskComponent implements OnInit {
  taskTitle:string
  taskDescription:string
  taskAssignedTo:string
  constructor(
    private router:Router,
    private taskService: TaskService,
    private notificationService: NotificationService 
    //@Inject(NotificationService) private notificationService: NotificationService
  ) {}
  ngOnInit(): void {
    
  }
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
    // this.taskService.addTask(newTask)
    //   .subscribe(task => {
    //     this.notificationService.sendMessage("BroadcastMessage", [task])
    //     this.router.navigate(['/']);
    //   });
    this.taskService.addTask(<Task>{
      id: "",
      name: this.taskTitle,
      description: this.taskDescription,
      status: Status.ToDo,
      assignedTo: this.taskAssignedTo
      }).subscribe(task => {
        this.notificationService.sendMessage("BroadcastMessage",[task])
        this.router.navigate(['/']);
      });

  }

  cancel(): void {
    this.router.navigate(['/']);
  }

}

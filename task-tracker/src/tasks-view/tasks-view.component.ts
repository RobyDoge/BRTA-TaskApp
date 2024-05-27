import { Component, Inject } from '@angular/core';
import { TaskGridComponent } from '../task-grid/task-grid.component';
import { Task } from '../task';
import { TaskListComponent } from '../task-list/task-list.component';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../app/notification.service';

@Component({
  selector: 'app-tasks-view',
  standalone: true,
  imports: [TaskGridComponent, TaskListComponent,MatIcon,CommonModule],
  templateUrl: './tasks-view.component.html',
  styleUrl: './tasks-view.component.scss',
})
export class TasksViewComponent {
  isList:boolean=true; 
  tasks: Task[] = []
  notificationMessage:string 
  constructor(
    @Inject(NotificationService) private notificationService: NotificationService
  )
  {
  }
  ngOnInit()
  {
    this.notificationService.notificationSubject.subscribe( hasNotifications => this.notificationMessage = hasNotifications ? "New notifications, please refresh the page" : "");
  }
}

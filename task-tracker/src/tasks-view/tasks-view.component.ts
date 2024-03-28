import { Component } from '@angular/core';
import { TaskGridComponent } from '../task-grid/task-grid.component';
import { Task } from '../task';
import { Status } from '../status';
import { TaskListComponent } from '../task-list/task-list.component';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TaskService } from '../app/services/task.service';

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
}

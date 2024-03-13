import { Component } from '@angular/core';
import { TaskGridComponent } from '../task-grid/task-grid.component';
import { Task } from '../task';
import { Status } from '../status';

@Component({
  selector: 'app-tasks-view',
  standalone: true,
  imports: [TaskGridComponent],
  templateUrl: './tasks-view.component.html',
  styleUrl: './tasks-view.component.scss'
})
export class TasksViewComponent {
  tasks: Task[]=[{
    id: "0", 
    description:"Task Description", 
    title:"Task title",
    status:Status.ToDo
  },
      {
    id: "1", 
    description:"Task1 Description", 
    title:"Task1 title",
    status:Status.Done
  }         ]
}
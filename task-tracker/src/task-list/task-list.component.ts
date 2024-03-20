import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { Status } from '../status';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,FilterComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
handleStatusSelected($event: Status) {
  this.filtredTasks = 
    this.tasks.filter((task) => task.status === $event);

}
  @Input() tasks: Task[];
  @Input() filtredTasks: Task[];
}


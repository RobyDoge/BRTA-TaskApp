import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { Status } from '../status';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button'; 


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,FilterComponent,MatButton,MatIcon],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  @Input() tasks: Task[];
  @Input() filtredTasks: Task[];
  handleStatusSelected($event: Status) {
    this.filtredTasks = 
      this.tasks.filter((task) => task.status === $event);
  
  }
  editTask(task:Task) :void{
      console.log('Edit task',task);
  }
  deleteTask(task:Task) :void{
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}


import { Component,Input } from '@angular/core';
import { Task } from '../task';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskService } from '../app/services/task.service';

@Component({
  selector: 'app-task-grid',
  standalone: true,
  imports: [CommonModule,TaskCardComponent],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.scss',

})
export class TaskGridComponent {
  tasks: Task[];
   constructor(
    private taskService: TaskService,
  ) {}

  ngOnInit (){
    this.tasks = this.taskService.getTasks();
  }
}

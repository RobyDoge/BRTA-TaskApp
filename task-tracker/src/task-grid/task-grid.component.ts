import { Component,Input } from '@angular/core';
import { Task } from '../task';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskService } from '../app/services/task.service';

@Component({
  selector: 'app-task-grid',
  standalone: true,
  imports: [CommonModule,TaskCardComponent],
  providers: [TaskService],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.scss',

})
export class TaskGridComponent {
  tasks: Task[];
   constructor(
    private taskService: TaskService,
  ) {}

  ngOnInit (){
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }
}

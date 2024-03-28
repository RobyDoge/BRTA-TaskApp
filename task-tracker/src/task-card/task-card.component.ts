import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Task } from '../task';
import { Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TaskService } from '../app/services/task.service';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule,MatIcon],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',

})
export class TaskCardComponent {
  @Input() task: Task | undefined;
  constructor(
    private taskService: TaskService,
  ) {}


  editTask(task:Task) :void{
    console.log('Edit task',task);
}
deleteTask(task:Task) :void{
  this.taskService.deleteTask(task.id);
}
}

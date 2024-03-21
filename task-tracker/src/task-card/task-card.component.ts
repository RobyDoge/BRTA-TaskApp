import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Task } from '../task';
import { Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule,MatIcon],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task: Task | undefined;
  
  editTask(task:Task) :void{
    console.log('Edit task',task);
}
deleteTask(task:Task) :void{
  console.log('Delete task',task);
  
}
}

import { Component,Input } from '@angular/core';
import { Task } from '../task';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-grid',
  standalone: true,
  imports: [CommonModule,TaskCardComponent],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.scss'
})
export class TaskGridComponent {
  @Input() tasks: Task[];
}

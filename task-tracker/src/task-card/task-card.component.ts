import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Task } from '../task';
import { Input } from '@angular/core';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task: Task | undefined;
}

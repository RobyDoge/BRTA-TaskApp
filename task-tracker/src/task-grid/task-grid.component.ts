import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Task } from '../task';
import { Input } from '@angular/core';
import {CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-grid',
  standalone: true,
  imports: [MatCardModule,CommonModule],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.scss'
})
export class TaskGridComponent {
  @Input() tasks: Task[];
}

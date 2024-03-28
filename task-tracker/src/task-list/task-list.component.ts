import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { Status } from '../status';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button'; 
import { TaskService } from '../app/services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from '../edit-task/edit-task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,FilterComponent,MatButton,MatIcon,EditTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',

})
export class TaskListComponent {
  tasks: Task[];
  @Input() filtredTasks: Task[];
  constructor(
    private taskService: TaskService,
    private dialog: MatDialog,
  ) {}

  ngOnInit (){
    this.tasks = this.taskService.getTasks();
    this.filtredTasks = this.tasks;
  }

  handleStatusSelected($event: Status) {
    this.filtredTasks = 
      this.tasks.filter((task) => task.status === $event);
  
  }
  editTask(task:Task) :void{
    const dialogRef = this.dialog.open(EditTaskComponent, {
      data: task,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.taskService.editTask(task);
    });

  }
  deleteTask(task:Task) :void{
    this.taskService.deleteTask(task.id);
  }
}


import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Task } from '../task';
import { Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TaskService } from '../app/services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from '../edit-task/edit-task.component';


@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule,MatIcon,EditTaskComponent],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',

})
export class TaskCardComponent {
  @Input() task: Task | undefined;
  constructor(
    private taskService: TaskService,
    private dialog: MatDialog,
  ) {}


    editTask(task: Task): void {
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

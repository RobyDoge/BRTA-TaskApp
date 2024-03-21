import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule,RouterLink,MatButton],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  taskTitle:string
  taskDescription:string
  router:Router = new Router

  onSubmit():void{
    console.log(this.taskTitle,this.taskDescription)
    this.router.navigate(['']);
  }
}

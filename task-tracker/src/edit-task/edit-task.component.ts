import {Component, Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Task } from '../task';
import { MatSelectModule } from '@angular/material/select';
import { Status } from '../status';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule,MatButtonModule,MatInputModule,
    MatFormFieldModule,MatDialogTitle,MatDialogContent,
    MatDialogActions,MatDialogClose, MatSelectModule,CommonModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss'
})
export class EditTaskComponent {
  initialData: Task;
  statuses: string[];

  constructor(
    public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA ) public data: Task
  ){
    this.initialData = data;
    this.statuses=Object.values(Status);
  }

  save(): void {
      console.log(this.data);
      this.dialogRef.close();
  }
  cancel(): void {
    console.log('Cancel Button Pressed');
    this.data=this.initialData;
    this.dialogRef.close();
  }
}

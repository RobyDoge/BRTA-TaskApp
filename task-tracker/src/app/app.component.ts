import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TasksViewComponent } from '../tasks-view/tasks-view.component';
import { RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, TasksViewComponent,RouterOutlet,RouterLink],
})
export class AppComponent {
  title="task-traker"
}

import { RouterModule, Routes } from '@angular/router';
import { TasksViewComponent } from '../tasks-view/tasks-view.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [ 
    { path: '',component: TasksViewComponent} 
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { EditTaskComponent } from './component/edit-task/edit-task.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'addtask', component: AddTaskComponent },
  { path: 'addtask/:taskId', component: AddTaskComponent },
  { path: 'editTask', component: EditTaskComponent },
  { path: 'editTask/:taskId', component: EditTaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

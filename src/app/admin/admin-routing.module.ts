import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { EditTaskComponent } from './component/edit-task/edit-task.component';
import { AdminActiveguardGuard } from '../guard/admin-activeguard.guard';

const routes: Routes = [
  { path: '', component: AdminComponent, canActivate: [AdminActiveguardGuard] },
  {
    path: 'addtask',
    component: AddTaskComponent,
    canActivate: [AdminActiveguardGuard],
  },
  {
    path: 'addtask/:taskId',
    component: AddTaskComponent,
    canActivate: [AdminActiveguardGuard],
  },
  {
    path: 'editTask',
    component: EditTaskComponent,
    canActivate: [AdminActiveguardGuard],
  },
  {
    path: 'editTask/:taskId',
    component: EditTaskComponent,
    canActivate: [AdminActiveguardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

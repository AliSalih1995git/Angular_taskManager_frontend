import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ActiveguardGuard } from '../guard/activeguard.guard';
import { EditTaskComponent } from './component/edit-task/edit-task.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [ActiveguardGuard] },
  {
    path: 'editTask',
    component: EditTaskComponent,
    canActivate: [ActiveguardGuard],
  },
  {
    path: 'editTask/:taskId',
    component: EditTaskComponent,
    canActivate: [ActiveguardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

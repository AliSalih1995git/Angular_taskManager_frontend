import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboadComponent } from './component/dashboad/dashboad.component';
import { HomeModule } from '../home/home.module';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { EditTaskComponent } from './component/edit-task/edit-task.component';
import { FormComponent } from './component/form/form.component';
import { ShareModule } from '../share/share.module';
import { EmployeeManagementComponent } from './component/employee-management/employee-management.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboadComponent,
    AddTaskComponent,
    EditTaskComponent,
    FormComponent,
    EmployeeManagementComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareModule,
    HomeModule,
    FormsModule,
  ],
})
export class AdminModule {}

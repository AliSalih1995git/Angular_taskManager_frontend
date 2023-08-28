import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListDataComponent } from './component/list-data/list-data.component';
import { EditTaskComponent } from './component/edit-task/edit-task.component';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [HomeComponent, ListDataComponent, EditTaskComponent],
  imports: [CommonModule, HomeRoutingModule, ShareModule, FormsModule],
  exports: [ListDataComponent],
})
export class HomeModule {}

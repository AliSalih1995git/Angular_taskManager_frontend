import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListDataComponent } from './component/list-data/list-data.component';
import { ShareModule } from '../share/share/share.module';

@NgModule({
  declarations: [HomeComponent, ListDataComponent],
  imports: [CommonModule, HomeRoutingModule, ShareModule],
  exports: [ListDataComponent],
})
export class HomeModule {}

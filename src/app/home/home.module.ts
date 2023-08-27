import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListDataComponent } from './component/list-data/list-data.component';
import { CardDisplayComponent } from './component/card-display/card-display.component';
import { ShareModule } from '../share/share/share.module';

@NgModule({
  declarations: [HomeComponent, ListDataComponent, CardDisplayComponent],
  imports: [CommonModule, HomeRoutingModule, ShareModule],
  exports: [ListDataComponent, CardDisplayComponent],
})
export class HomeModule {}

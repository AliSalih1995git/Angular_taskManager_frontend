import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByStatusPipe } from './filter-by-status.pipe';
import { CardDisplayComponent } from '../component/card-display/card-display.component';

@NgModule({
  declarations: [FilterByStatusPipe, CardDisplayComponent],
  imports: [CommonModule],
  exports: [FilterByStatusPipe, CardDisplayComponent],
})
export class ShareModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByStatusPipe } from './filter-by-status.pipe';
import { CardDisplayComponent } from './component/card-display/card-display.component';
import { BackgroundChangeDirective } from './directive/background-change.directive';
import { CustomfilterPipe } from './customfilter.pipe';

@NgModule({
  declarations: [
    FilterByStatusPipe,
    CardDisplayComponent,
    BackgroundChangeDirective,
    CustomfilterPipe,
  ],
  imports: [CommonModule],
  exports: [
    FilterByStatusPipe,
    CardDisplayComponent,
    BackgroundChangeDirective,
    CustomfilterPipe,
  ],
})
export class ShareModule {}

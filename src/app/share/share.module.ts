import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByStatusPipe } from './filter-by-status.pipe';
import { CardDisplayComponent } from './component/card-display/card-display.component';
import { BackgroundChangeDirective } from './directive/background-change.directive';

@NgModule({
  declarations: [
    FilterByStatusPipe,
    CardDisplayComponent,
    BackgroundChangeDirective,
  ],
  imports: [CommonModule],
  exports: [
    FilterByStatusPipe,
    CardDisplayComponent,
    BackgroundChangeDirective,
  ],
})
export class ShareModule {}

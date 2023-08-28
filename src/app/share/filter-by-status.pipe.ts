import { Pipe, PipeTransform } from '@angular/core';
import { SingleTask } from 'src/app/home/models/homeModel';

@Pipe({
  name: 'filterByStatus',
})
export class FilterByStatusPipe implements PipeTransform {
  transform(tasks: SingleTask[], status: string): SingleTask[] {
    return tasks.filter((task) => task.status === status);
  }
}

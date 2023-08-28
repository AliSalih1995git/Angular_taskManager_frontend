import { Pipe, PipeTransform } from '@angular/core';
import { user } from '../admin/dataModel/datamodel';

@Pipe({
  name: 'customfilter',
})
export class CustomfilterPipe implements PipeTransform {
  transform(value: user[], searchTerm: string): user[] {
    if (!value || !searchTerm) {
      return value;
    }

    return value.filter((item) =>
      item.userName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }
}

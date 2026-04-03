import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpty',
})
export class DashIfEmptyPipe implements PipeTransform {
  transform(value: any): string | any {
    const isValueEmpty = value === undefined || value === null || value === '';

    if (isValueEmpty) {
      return '-';
    }

    return value;
  }
}

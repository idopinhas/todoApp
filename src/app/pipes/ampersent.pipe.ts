import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ampersent'
})
export class AmpersentPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.split(' ').join('&');
  }

}

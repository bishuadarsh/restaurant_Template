import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanCategorieNames'
})
export class CleanCategorieNamesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

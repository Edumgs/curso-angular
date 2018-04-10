import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {

  transform(value: string, por: string): string {
    let value_one = parseInt(value),
        value_two = parseInt(por),
        result = "La multiplicación: " + value_one + " x " + value_two + " = " + (value_one * value_two);

    return result;
  }

}

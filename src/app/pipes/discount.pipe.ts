import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: any, num1:any, num2?:any): any {
    let discount = num1;
    let price = value - ((discount / 100) * value );
    let finaldiscount = price - ((num2/ 100) * value)
    return finaldiscount;
  }

}

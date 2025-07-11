import { Pipe, PipeTransform } from '@angular/core';
import { createLinkedSignal } from '@angular/core/primitives/signals';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
   console.log(args)
   let [data] = args
   if(args.length>0){

     return value*data;
   }else{
    return value*85
   }
  }

}

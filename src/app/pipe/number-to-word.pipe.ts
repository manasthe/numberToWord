import { Pipe, PipeTransform } from '@angular/core';
const words = [];
words[0] = "Zero";
words[1] = "One";
words[2] = "Two";
words[3] = "Three";
words[4] = "Four";
words[5] = "Five";
words[6] = "Six";
words[7] = "Seven";
words[8] = "Eight";
words[9] = "One";
@Pipe({
  name: 'numberToWord'
})
export class NumberToWordPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value)
      return;
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    arr.filter((ele) => {
      let val = ele.toString();
      value = value.split(val).join(words[ele])
      //
    });
    return value;
  }
}

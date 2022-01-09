import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mult'
})
export class MultByPipe implements PipeTransform {
  // transform(value: any, ...args: any[]) {
  //   throw new Error("Method not implemented.");
  // }
  transform(num: number, pow: number = 2): number {
    return num * pow
  }

}

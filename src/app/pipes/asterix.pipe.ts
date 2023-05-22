import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch:string) {
    let result="";
    let x="";
   let V=["a","e","i","u","o","y"];
   for (let i = 0; i < ch.length; i++) {
    x=ch[i];
    for (let j = 0; j < V.length; j++) {
      if (ch[i].toLowerCase() == V[j] ) {
      x = "*";
      break;
      }
    }
    result= result + x;
   }
   return result;
  }

}

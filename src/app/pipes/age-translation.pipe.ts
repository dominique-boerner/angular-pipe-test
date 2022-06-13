import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageTranslation'
})
export class AgeTranslationPipe implements PipeTransform {

  transform(age: {from: number|undefined, to: number|undefined}): string {
    let string = "";

    if (age.from && !age.to) {
      string = `age.from`;
    } else if (age.to && !age.from) {
      string = `age.to`;
    } else {
      string = `age.from-to`;
    }
    return string;
  }

}

import { Pipe, PipeTransform } from '@angular/core';


/*
pure: false, is not obligatory, and by default is true. With false the pipe will rerun
whenever a property change, this is why is not always the best practice due to performance issues.
*/
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if(value.lenght === 0 || filterString === ''){
      return value;
    }

    const resultArray = [];
    for(const item of value){
      if(item[propName] === filterString){
        resultArray.push(item);
      }
    }
    return resultArray

  }

}

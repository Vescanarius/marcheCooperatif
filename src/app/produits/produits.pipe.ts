import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'ProduitsPipeValue' })
export class ProduitsPipeValue implements PipeTransform {



  transform(id: number) {

    let value:string;
    console.log(id);

    switch (id) {
      case 596:
      value = 'Interdit.e sur le marché'; 
      break;
    }
    return value;
  }
}

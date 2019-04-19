import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'DroitsClientPipe' })
export class DroitsClientPipe implements PipeTransform {
  transform(auth: boolean) {
    let value: string;
    switch (auth) {
      case true:
        value = 'Authorisé.e sur le marché';
        break;
      case false:
        value = 'Interdit.e sur le marché';
        break;

    }
    return value;
  }
}

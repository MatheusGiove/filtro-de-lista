import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address-interface';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(address: IAddress): string {
    const isAddressInvalid =
      !address ||
      !address.rua ||
      !address.cidade ||
      !address.estado ||
      address.numero === null ||
      address.numero === undefined;

    if (isAddressInvalid) {
      return 'Endereço indiponível ou inválido'
    }

    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`;
  }
}

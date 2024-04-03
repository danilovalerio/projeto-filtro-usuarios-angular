import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(endereco: IAddress): string {
    const INVALID_ADDRESS =
      !endereco ||
      !endereco.rua ||
      !endereco.cidade ||
      !endereco.estado ||
      endereco.numero === null ||
      endereco.numero === undefined;

    if (INVALID_ADDRESS) {
      return 'Endereço indisponível ou inválido.';
    }

    let fullAddress: string = `${endereco?.rua}, ${endereco?.numero}, ${endereco?.cidade}, ${endereco?.estado}`;

    return fullAddress;
  }
}

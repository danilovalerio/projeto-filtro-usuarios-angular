import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusClass', //nome da classe sem o pipe para padronizar
})
export class StatusClassPipe implements PipeTransform {
  transform(status: boolean): string {
    const INVALID_STATUS = status === undefined || status === null;

    console.log('StatusClassPipe foi usada');

    //TODO: Extrair para constantsUtils o Ativo e Inativo
    if (INVALID_STATUS) {
      return 'Status inválido ou indisponível.';
    }

    if (status) {
      return 'Ativo';
    } else {
      return 'Inativo';
    }
  }
}

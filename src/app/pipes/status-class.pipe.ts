import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusClass', //nome da classe sem o pipe para padronizar
})
export class StatusClassPipe implements PipeTransform {
  transform(status: boolean): string {
    console.log('StatusClassPipe foi usada');

    //TODO: Extrair para constantsUtils o Ativo e Inativo
    if (status) {
      return 'Ativo';
    } else {
      return 'Inativo';
    }
  }
}

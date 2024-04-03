import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

export interface IUserElement {
  name: string;
  dateRegistred: string;
  status: string;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  displayedColumns: string[] = ['Nome', 'Data de Registro', 'Status'];

  /**
   * Input para receber a lista de forma dinâmica
   */
  @Input({ required: true, alias: 'usersList' })
  dataSource: IUser[] = [];

  @Output('userSelected')
  onUserSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected(userEmitted: IUser) {
    console.log(
      `Clicou no item da tabela: ' + '${
        userEmitted.nome +
        ' ' +
        userEmitted.dataCadastro +
        ' ' +
        userEmitted.ativo
      }'`
    );
    this.onUserSelectedEmitt.emit(userEmitted);
  }
}

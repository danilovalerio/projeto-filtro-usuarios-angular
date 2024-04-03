import { Component, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../data/users-list';

export interface IUserElement {
  name: string;
  dateRegistred: string;
  status: string;
}

const ELEMENT_NEW_DATA: IUser[] = UsersList;

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  displayedColumns: string[] = ['Nome', 'Data de Registro', 'Status'];
  dataSource = ELEMENT_NEW_DATA;

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

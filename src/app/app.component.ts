import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  userSelected: IUser = {} as IUser;

  onUserSelected(user: IUser) {
    console.log(`Usuário foi selecionado na lista: ${user.nome}`);
    this.userSelected = user;
  }
}

import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      //this.showUserDetails = true;
      //console.log('Após 3 segundos');
      this.usersList = UsersList;
    }, 3000);
  }

  onUserSelected(user: IUser) {
    console.log(`Usuário foi selecionado na lista: ${user.nome}`);
    this.userSelected = user;
    this.showUserDetails = true;
  }
}

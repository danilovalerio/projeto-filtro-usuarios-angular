import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { addDays, isWithinInterval } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      //this.showUserDetails = true;
      //console.log('Após 3 segundos');
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    }, 1000);
  }

  onUserSelected(user: IUser) {
    console.log(`Usuário foi selecionado na lista: ${user.nome}`);
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    console.log(`onFilter AppComponent ${JSON.stringify(filterOptions)}`);

    this.usersListFiltered = this.filterUsersList(
      filterOptions,
      this.usersList
    );
  }

  /**
   * Função pura no conceito de programção funcional
   * Não altera propriedades externas como acontece numa função impura
   *
   * @param filterOptions
   * @param usersList
   */
  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName(filterOptions.name, usersList);
    filteredList = this.filterUsersListByStatus(
      filterOptions.status,
      filteredList
    );

    filteredList = this.filterUsersListByDateInterval(
      filterOptions.startDate,
      filterOptions.endtDate,
      filteredList
    );

    return filteredList;
  }

  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name == undefined;

    if (NAME_NOT_TYPPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) =>
      user.nome.toLowerCase().includes(name.toLowerCase())
    );

    return filteredList;
  }

  filterUsersListByStatus(
    status: boolean | undefined,
    usersList: IUser[]
  ): IUser[] {
    const STATUS_NOT_SELECTED = status == undefined;

    if (STATUS_NOT_SELECTED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.ativo === status);

    return filteredList;
  }

  /**
   * Lib DATE-FNS Document
   * https://date-fns.org/v3.6.0/doc
   *
   * @param startDate
   * @param endtDate
   * @param usersList
   * @returns
   */
  filterUsersListByDateInterval(
    startDate: Date | undefined,
    endtDate: Date | undefined,
    usersList: IUser[]
  ): IUser[] {
    const DATE_INTERVAL_NOT_SELECTED =
      startDate === undefined || endtDate === undefined;

    if (DATE_INTERVAL_NOT_SELECTED) {
      return usersList;
    }

    const listFiltered = usersList.filter((user) =>
      isWithinInterval(new Date(user.dataCadastro), {
        start: startDate,
        end: addDays(endtDate, 1), //add 1 day
      })
    );

    return listFiltered;
  }
}

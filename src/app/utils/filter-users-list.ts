import { addDays, isWithinInterval } from 'date-fns';
import { IUser } from '../interfaces/user/user.interface';
import { IFilterOptions } from '../interfaces/filter-options.interface';

/**
 * Função pura no conceito de programção funcional
 * Não altera propriedades externas como acontece numa função impura
 *
 * @param filterOptions
 * @param usersList
 */
export function filterUsersList(
  filterOptions: IFilterOptions,
  usersList: IUser[]
): IUser[] {
  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filterOptions.name, usersList);
  filteredList = filterUsersListByStatus(filterOptions.status, filteredList);

  filteredList = filterUsersListByDateInterval(
    filterOptions.startDate,
    filterOptions.endtDate,
    filteredList
  );

  return filteredList;
}

function filterUsersListByName(
  name: string | undefined,
  usersList: IUser[]
): IUser[] {
  const NAME_NOT_TYPPED = name == undefined;

  if (NAME_NOT_TYPPED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) =>
    user.nome.toLowerCase().includes(name.toLowerCase())
  );

  return filteredList;
}

function filterUsersListByStatus(
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
function filterUsersListByDateInterval(
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

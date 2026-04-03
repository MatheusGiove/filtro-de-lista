import { isWithinInterval } from 'date-fns';
import { IUser } from '../interfaces/user/user-interface';
import { IFilterOptions } from '../interfaces/filter-options.interface';

export const filterUsersList = (
  filterOptions: IFilterOptions,
  usersList: IUser[],
): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filterOptions.name, usersList);

  filteredList = filterUsersListByDate(
    filterOptions.startDate,
    filterOptions.endDate,
    filteredList,
  );

  filteredList = filterUsersListByStatus(filterOptions.status, filteredList);

  return filteredList;
};

const filterUsersListByName = (
  name: string | undefined,
  usersList: IUser[],
): IUser[] => {
  const isNameInvalid = name === undefined;

  if (isNameInvalid) {
    return usersList;
  }

  return usersList.filter((user) =>
    user.nome.toLowerCase().includes(name.toLowerCase()),
  );
};

const filterUsersListByDate = (
  startDate: Date | undefined,
  endDate: Date | undefined,
  usersList: IUser[],
): IUser[] => {
  const isDatesInvalid = startDate === undefined || endDate === undefined;

  if (isDatesInvalid) {
    return usersList;
  }

  return usersList.filter((user) => {
    return isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate,
    });
  });
};

const filterUsersListByStatus = (
  status: boolean | undefined,
  usersList: IUser[],
): IUser[] => {
  const isStatusInvalid = status === undefined;

  if (isStatusInvalid) {
    return usersList;
  }

  return usersList.filter((user) => user.ativo === status);
};

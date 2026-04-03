import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user-interface';
import { UsersListFaker } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filterUsersList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'filtro-de-lista';

  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];

  userSelected: IUser = {} as IUser;
  showUserDetails = false;

  ngOnInit(): void {
    const seconds = 3;

    setTimeout(() => {
      this.usersList = UsersListFaker;
      this.usersListFiltered = this.usersList;
    }, seconds * 1);
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    console.log(filterOptions);

    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
  }
}

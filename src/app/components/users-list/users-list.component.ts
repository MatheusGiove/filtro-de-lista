import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user-interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  displayedColumns: Array<string> = ['name', 'date', 'status'];

  @Input({ required: true }) usersList: IUser[] = [];
  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    console.log('User: ', user);

    this.userSelectedEmitt.emit(user);
  }
}

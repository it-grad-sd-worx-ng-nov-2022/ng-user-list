import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SelectedUserService {

  selectedUser: User | any = {};

  constructor() { }

  setSelectedUser(user: User) {
    this.selectedUser = user;
    console.log('selected user service', this.selectedUser);
  }

  getSelectedUser() {
    return this.selectedUser;
  }


}

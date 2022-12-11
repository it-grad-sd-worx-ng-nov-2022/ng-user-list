import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SelectedUserService {

  selectedUser : User | any = {};

  constructor() { }

  setSelectedUser(user:User){
    this.selectedUser = user;
    console.log('Selected user service',this.selectedUser);
  }

  getSelectedUser():Observable<User>{
    console.log("getSelected USer", this.selectedUser);
    
    return this.selectedUser;
  }

}

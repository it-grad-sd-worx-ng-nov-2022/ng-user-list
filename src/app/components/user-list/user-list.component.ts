import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  filteredUserData: User[] = [];
  apiRequestSeed: string = 'Students';// default seed is Students
  userData: User[] = [];
  selectedUser:User|any = {};

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    //calling the users on page load with initial value of students
    this.getSeedUsers();
  }

  setData(Data: User[]) {
    console.log("waza", Data);
    this.filteredUserData = Data;
    this.setSelectedUser(this.filteredUserData[0]);
    console.log("WAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA -> ", this.selectedUser);
    
    
    
  }


  getSeedUsers() {
    console.log("Call API with the following seed ->", this.apiRequestSeed);
    // this.apiRequestSeed;
    // Call API request method with seed
    this.api.role = this.apiRequestSeed;
    this.api.request('getList', 'get').subscribe((userList: { [key: string]: string | any }) => {
      // console.log('result: ', userList);
      this.userData = userList['results'];
      this.setData(this.userData); //  initial data without any search
    });
  }


  setSelectedUser(user:User) {
    this.selectedUser = user;
  }
}

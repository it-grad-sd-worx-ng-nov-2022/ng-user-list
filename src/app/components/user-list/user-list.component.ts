import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  currentTheme: string = 'light';
  filteredUserData: User[]  = [];
  apiRequestSeed: string = 'Students';// default seed is Students
  userData: User[] = [];
  selectedUser: User | any = {};
  numberOfResults: string = "20";


  constructor(public api: ApiService) { }

  ngOnInit(): void {
    //calling the users on page load with initial value of students
    this.getSeedUsers();

  }

  setData(Data: User[]) {
    console.log("waza", Data);
    this.filteredUserData = Data;
    this.setSelectedUser(this.filteredUserData[0]);
    // this.currentClicked = this.selectedUser.id;
    // console.log('Clicked By Arooven: ',this.currentClicked);
    console.log("WAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA -> ", this.selectedUser);



  }


  getSeedUsers() {
    console.log("Call API with the following seed ->", this.apiRequestSeed);
    console.log("Call API with the following number of results ->", this.numberOfResults);
    // this.apiRequestSeed;
    // Call API request method with seed
    // let params:HttpParams = new HttpParams();
    // params.append('results',this.numberOfResults);
    // params.append('seed',this.apiRequestSeed);

    this.api.result = this.numberOfResults;
    this.api.request('getList', 'get', undefined, this.apiRequestSeed).subscribe(
      (response: { [key: string]: string | any }) => {
        // console.log('result: ', response);
        // console.log("Seed--->>>", response['info'].seed);
        if (response['info'].seed == this.apiRequestSeed) {

          this.userData = response['results'];
          this.setData(this.userData); //  initial data without any search
         // Swal.fire(this.apiRequestSeed, "Group of Users", 'success');
        }
      });
  }


  setSelectedUser(user: User) {
    this.selectedUser = user;
  }
}

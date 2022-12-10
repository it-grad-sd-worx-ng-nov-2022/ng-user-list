import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  filteredUserData?:User[];
  //filteredUserData?:User[] = [];
  apiRequestSeed:string = 'Students';// default seed is Students
  userData:User[] = [];

  constructor(public api:ApiService) { }

  ngOnInit(): void {
    this.filteredUserData = this.userData;
    //calling the users on page load with initial value of students
    this.getSeedUsers();
  }

  setData(filteredData:User[]) {
    console.log("waza",filteredData);
    this.filteredUserData = filteredData;
  }

  getSeedUsers() {
    console.log("Call API with the following seed ->", this.apiRequestSeed);
    
    // this.apiRequestSeed;
    // Call API request method with seed

    switch(this.apiRequestSeed){
      case "Students":{
        this.api.request('students','get').subscribe((students:{[key:string] : string | any}) =>{
          console.log('students: ', students);
          this.userData = students['results'];
          this.filteredUserData = this.userData;
        })
        break;
      }

      case "Alumni":{
        this.api.request('alumni','get').subscribe((alumnis:{[key:string] : string | any}) =>{
          console.log('Alumni: ', alumnis);
          this.userData = alumnis['results'];
          this.filteredUserData = this.userData;
        })
        break;
      }

      case "Teachers":{
        this.api.request('teachers','get').subscribe((teachers:{[key:string] : string | any}) =>{
          console.log('Teachers: ', teachers);
          this.userData = teachers['results'];
          this.filteredUserData = this.userData;
        })
        break;
      }
    }
  }
}

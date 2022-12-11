import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { ApiService } from 'src/app/services/api.service';
import { User } from '../../models/user';
import { SelectedUserService } from '../../services/selected-user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userId: string | null = '';
  // selectedUser?: Login;
  @Input() selectedUser: User | any = {};


  constructor(
    public apiService: ApiService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public selectedUserService: SelectedUserService,
  ) { }

  ngOnInit(): void {
    // this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log('user id: ', this.userId);

    // //if exists
    // if(this.userId){
    //   this.getUserDetails();
    // }

    //for testing
    // this.router.events.subscribe((result) => {
    //   if(result instanceof NavigationEnd){
    //     this.userId = this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    //     this.getUserDetails();
    //     console.log('router events user id: ', this.userId);
    //   }
    // });
  }



}

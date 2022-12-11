import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

//userSeed: Seed [] = [];
teacherSeed:string='Teachers';
studentSeed:string='Students';
alumniSeed:string='Alumni';


  constructor(
    public api: ApiService,
    public router:Router
  ) { }

  ngOnInit(): void {


  }

}

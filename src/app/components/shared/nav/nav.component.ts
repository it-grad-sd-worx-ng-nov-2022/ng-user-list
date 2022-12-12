import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  selectedTheme:string ='';
  currentTheme:string ='light';
  setThemeMode:boolean = false;

  constructor(
    public setting:SettingService
  ) { }

  ngOnInit(): void {
    this.setting.outsetTheme.subscribe(newTheme => {
      console.log("newTheme", newTheme);
      this.currentTheme = newTheme;
    });

  }
  updateTheme(){

    if(this.setThemeMode){
      this.setting.theme = 'dark';
    }else{
      this.setting.theme = 'light';
    }

    // console.log(this.selectedTheme)
    // this.setting.theme=this.selectedTheme
  }


  }


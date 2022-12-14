import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { SettingService } from './services/setting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
currentTheme:string = 'light';
  constructor(
   public api:ApiService,
   public setting:SettingService
  ) {
    
  }
  
  ngOnInit(): void {
    this.setting.outsetTheme.subscribe(newTheme => {
      console.log("newTheme", newTheme);
      this.currentTheme = newTheme;
    });

  } 
  
}



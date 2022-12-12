import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../../services/setting.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
currentTheme:string ='light';
  constructor(
    public setting:SettingService
  ) { }

  ngOnInit(): void {
    this.setting.outsetTheme.subscribe(newTheme => {
      console.log("newTheme", newTheme);
      this.currentTheme = newTheme;
    });
  }

}

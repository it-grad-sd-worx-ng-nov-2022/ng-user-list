import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private _currentTheme: string = '';
  public outsetTheme: Subject<string> = new Subject();


  constructor() { }

  get theme() {
    return this._currentTheme;
  }

  set theme(value) {
    this._currentTheme = value;
    this.outsetTheme.next(value);
    console.log('Setting theme value: ', value);
  }
}

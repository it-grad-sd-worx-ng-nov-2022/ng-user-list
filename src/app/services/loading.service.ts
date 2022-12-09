import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading: Subject<boolean> = new Subject();

  constructor() { }

  startLoading() {
    this.loading.next(true);
  console.log("Loading Start")
  }
  stopLoading() {
    this.loading.next(false);
    console.log("Stopped loading ");
 }


}

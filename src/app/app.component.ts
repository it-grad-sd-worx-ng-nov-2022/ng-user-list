import { Component, OnInit } from '@angular/core';
import SWAL from 'sweetalert2'
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { ApiService } from './services/api.service';
import { ErrorService } from './services/error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  constructor(
   public errorService: ErrorService,
   public api:ApiService
  ) {
    
  }
  
  ngOnInit(): void {
    
    this.api.request('user', 'get', undefined, '20').subscribe((x) => {
      console.log(x);
    })

    this.errorService.onError.subscribe((message) => {      
       SWAL.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Gentleman, we have a problem',
          timer: 5000,
          backdrop: false
          })
    }) ;
    console.error('BRRRT');
    this.errorService.onError.next('Test error');
  } 
  
}



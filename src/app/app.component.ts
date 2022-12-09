import { Component, OnInit } from '@angular/core';
import SWAL from 'sweetalert2'
import { ErrorInterceptor } from './interceptors/error.interceptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  constructor(
   public errorInterceptor: ErrorInterceptor
  ) {
    
  }
  
  ngOnInit(): void {
    
    this.errorInterceptor.onError.subscribe((message) => {
      console.log('errrr');
       SWAL.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Gentleman, we have a problem',
          timer: 5000,
          backdrop: false
          })
    }) ;
    this.errorInterceptor.onError.next('eroorrrr');
  } 
  
}



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
    
    // this.api.request('userList', 'get').subscribe((result:any) => {
    //   console.log(this.api.list);
    // })
    // this.api.request('userDetails', 'get', undefined,"2").subscribe((result:any) => {
    //   console.log(result);
    // })

    // console.log('test',this.api.list)

    this.errorService.onError.subscribe((message) => {      
       SWAL.fire({
          position: 'top-end',
          imageUrl: 'https://thumbs.dreamstime.com/b/stressed-virtual-reality-developer-out-programmer-working-game-app-79348096.jpg',
          imageWidth: 400,
          imageHeight: 266,
          title: 'Gentleman, we have a problem',
          timer: 5000,
          backdrop: false,
          showConfirmButton:false
          })
    }) ;
    this.errorService.onError.next('Test error');
  } 
  
}



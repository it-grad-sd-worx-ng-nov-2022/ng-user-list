import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  activeReqeust: number = 0;

  constructor(
    public loading: LoadingService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(this.activeReqeust===0){
      console.log("Active request: ", this.activeReqeust);
      this.loading.startLoading();
    }
    this.activeReqeust++;

    return next.handle(request).pipe(
      finalize(() => {
        if(this.activeReqeust>0){
          this.activeReqeust--;
        }
        if(this.activeReqeust===0){
          this.loading.stopLoading();
        }
      })
    );
    






  }
}

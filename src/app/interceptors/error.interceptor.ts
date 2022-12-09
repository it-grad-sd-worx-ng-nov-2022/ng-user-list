import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, retry, Subject, throwError } from 'rxjs';
import { ErrorService } from '../services/error.service';
import SWAL from 'sweetalert2';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    public errorService: ErrorService,
  ) { }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        }
        else {
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        console.log('This is my error:', errorMsg);

        SWAL.fire({
          position: 'top-end',
          imageUrl: 'https://thumbs.dreamstime.com/b/stressed-virtual-reality-developer-out-programmer-working-game-app-79348096.jpg',
          imageWidth: 400,
          imageHeight: 266,
          title: 'Gentleman, we have a problem: '+errorMsg,
          timer: 10000,
          backdrop: false,
          showConfirmButton: false
        })

        return throwError(error);
      })
    );
  }
}
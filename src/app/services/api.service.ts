
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "https://randomuser.me/api/?results=20&seed=";

  list: {[k:string]:string | any} = {};

  constructor(public http: HttpClient) {
  }

  endpoints: { [endpoint: string]: string | any } = {
    userList: `${this.baseUrl}`, 
    students: `${this.baseUrl}students`,
    alumni: `${this.baseUrl}alumni`,
    teachers: `${this.baseUrl}teachers`
    // userDetails:(id: string)=> {
    //   return new Observable((subscriber) => {
    //     subscriber.next(this.getUserById(id));
    //     subscriber.complete();
    //   })
    // },
  }

  getUserById(id:string){
    console.log('Pseudo ID:',id);
    return this.list;
  }

  request(url: endpointType, method: string, payload?: object, urlParams?: any) {
    // if(urlParams) return  this.endpoints[url](urlParams);
    // return this.http.request(method, this.endpoints[url]).pipe(tap((result)=>{console.log(result);this.list=result}))
    // const finalUrl = !urlParams ? this.endpoints[url] : this.endpoints[url](urlParams);
    // return !payload ? this.http.request(method, finalUrl).pipe(tap((result)=>{this.list=result})) : finalUrl;
  }
}



export type endpointType = 'userList' | 'students' | 'teachers' | 'alumni'; 

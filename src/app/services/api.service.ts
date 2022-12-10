import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({

  providedIn: 'root'

})

export class ApiService {

  baseUrl: string = "https://randomuser.me/api/?results=20&seed=";
  //userBaseUrl:string = "https://randomuser.me/api/";

  list: {[k:string]:string | any} = {};

  constructor(public http: HttpClient) {

  }

  endpoints: { [endpoint: string]: string | any } = {

    userList: `${this.baseUrl}`,
    students: `${this.baseUrl}students`,
    alumni: `${this.baseUrl}alumni`,
    teachers: `${this.baseUrl}teachers`,
    // userDetails:(id: string)=> {
    //   return new Observable((subscriber) => {
    //     subscriber.next(this.getUserById(id));
    //     subscriber.complete();
    //   })
    // },

    //for testing
    //getUserId: (name:string) => `${this.userBaseUrl}?name=${name}`
  }

  getUserById(id:string){
    console.log('Pseudo ID:',id);
    return this.list;
  }

  request(url: endpointType, method: string, payload?: object, urlParams?: any) {
    const finalUrl = !urlParams ? this.endpoints[url] : this.endpoints[url](urlParams);
    return !payload ? this.http.request(method, finalUrl) : this.http.request(method, finalUrl, {body : payload});
  }

}

export type endpointType = 'userList' | 'students' | 'teachers' | 'alumni';

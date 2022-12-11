import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({

  providedIn: 'root'

})

export class ApiService {

  baseUrl: string = "https://randomuser.me/api/?";
  result: string = "";
  //userBaseUrl:string = "https://randomuser.me/api/";
  role: string = "";
  // list: {[k:string]:string | any} = {};
  constructor(public http: HttpClient) {

  }

  endpoints: { [endpoint: string]: string | any } = {

    userList: `${this.baseUrl}`,
    getList: `${this.baseUrl}results=${this.result}&seed=${this.role}`,

    // userDetails:(id: string)=> {
    //   return new Observable((subscriber) => {
    //     subscriber.next(this.getUserById(id));
    //     subscriber.complete();
    //   })
    // },

    //for testing
    //getUserId: (name:string) => `${this.userBaseUrl}?name=${name}`
  }

  request(url: endpointType, method: string, payload?: object, urlParams?: any) {
    console.log('requ: ', this.result)
    const finalUrl = !urlParams ? this.endpoints[url] : this.endpoints[url](urlParams);
    console.log('url: ', finalUrl);

    return !payload ? this.http.request(method, finalUrl) : this.http.request(method, finalUrl, { body: payload });
  }

}

export type endpointType = 'userList' | 'getList';

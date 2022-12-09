
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "https://randomuser.me/api/?results=";

  constructor(public http: HttpClient) {

   }

  endpoints: { [endpoint: string]: string | any } = {


    user: (results:number) => `${this.baseUrl}${results}`, 
    userDetails:(id: string)=> `${this.baseUrl}users/details/${id}`, // <== not working, we must fix URL
  }


  request(url: endpointType, method: string, payload?: object, urlParams?: any) {
    const finalUrl = !urlParams ? this.endpoints[url] : this.endpoints[url](urlParams);
    return !payload ? this.http.request(method, finalUrl) : this.http.request(method, finalUrl, { body: payload });
  }
}



export type endpointType = 'user' | 'userDetails'; 

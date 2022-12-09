import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({

  providedIn: 'root'

})

export class ApiService {

  baseUrl: string = "https://randomuser.me/api/?results=20&seed=";
  
  constructor(public http: HttpClient) {

  }

  endpoints: { [endpoint: string]: string | any } = {

    userList: `${this.baseUrl}`,
    students: `${this.baseUrl}students`,
    alumni: `${this.baseUrl}alumni`,
    teachers: `${this.baseUrl}teachers`
  }

  request(url: endpointType, method: string, payload?: object, urlParams?: any) {
    const finalUrl = !urlParams ? this.endpoints[url] : this.endpoints[url](urlParams);
    return !payload ? this.http.request(method, finalUrl) : this.http.request(method, finalUrl, {body : payload});
  }

}

export type endpointType = 'userList' | 'students' | 'teachers' | 'alumni';
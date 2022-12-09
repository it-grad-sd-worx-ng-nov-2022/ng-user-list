import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  filteredUserData?:User[];
  apiRequestSeed:string = 'Students'// default seed is Students
  userData:User[] = [
    // dummy data
    {
      "gender":"female",
      "name":{"title":"Miss","first":"Jos","last":"Narváez"},
      "location":{"street":{"number":6615,"name":"Viaducto Cuba"},
      "city":"Villamar",
      "state":"Colima",
      "country":"Mexico",
      "postcode":52044,
      "coordinates":{"latitude":"28.0035","longitude":"85.6728"},
      "timezone":{"offset":"-8:00","description":"Pacific Time (US & Canada)"}},
      "email":"jos.narvaez@example.com",
      "login":{"uuid":"8902aff4-7817-4274-8bcf-b2649b0abe46","username":"yellowpanda213","password":"scamper","salt":"IeBlEpbU","md5":"c9782aa11f80ef20f930261136fa3a6d","sha1":"7b0190b0f7bcc75d85769b8d10ac3bf29bb1019b","sha256":"ff13c51f35e62edfe6d679f54a296d788d4780b8f81b2d4523e39bf0e0754175"},
      "dob":{"date":"1966-10-19T02:16:02.809Z","age":56},
      "registered":{"date":"2008-06-21T13:58:25.633Z","age":14},
      "phone":"(670) 679 2376",
      "cell":"(685) 354 1445",
      "id":{"name":"NSS","value":"91 45 26 3270 7"},
      "picture":{"large":"https://randomuser.me/api/portraits/women/59.jpg","medium":"https://randomuser.me/api/portraits/med/women/59.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/59.jpg"},
      "nat":"MX"
    },

    {
      "gender":"female",
      "name":{"title":"Miss","first":"test","last":"dummy"},
      "location":{"street":{"number":6615,"name":"Viaducto Cuba"},
      "city":"Villamar",
      "state":"Colima",
      "country":"Mexico",
      "postcode":52044,
      "coordinates":{"latitude":"28.0035","longitude":"85.6728"},
      "timezone":{"offset":"-8:00","description":"Pacific Time (US & Canada)"}},
      "email":"waza.narvaez@example.com",
      "login":{"uuid":"8902aff4-7817-4274-8bcf-b2649b0abe46","username":"yellowpanda213","password":"scamper","salt":"IeBlEpbU","md5":"c9782aa11f80ef20f930261136fa3a6d","sha1":"7b0190b0f7bcc75d85769b8d10ac3bf29bb1019b","sha256":"ff13c51f35e62edfe6d679f54a296d788d4780b8f81b2d4523e39bf0e0754175"},
      "dob":{"date":"1966-10-19T02:16:02.809Z","age":56},
      "registered":{"date":"2008-06-21T13:58:25.633Z","age":14},
      "phone":"(670) 679 2376",
      "cell":"(685) 354 1445",
      "id":{"name":"NSS","value":"91 45 26 3270 7"},
      "picture":{"large":"https://randomuser.me/api/portraits/women/59.jpg","medium":"https://randomuser.me/api/portraits/med/women/59.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/59.jpg"},
      "nat":"MX"
    },
    ]

  constructor() { }

  ngOnInit(): void {
    this.filteredUserData = this.userData;
  }

  setData(filteredData:User[]) {
    console.log("waza",filteredData);
    this.filteredUserData = filteredData;
  }

  getSeedUsers() {
    console.log("Call API with the following seed ->", this.apiRequestSeed);
    
    // this.apiRequestSeed;
    // Call API request method with seed
  }

}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() data:User[] | any[] = [];
  @Output() filteredData: EventEmitter<any[]> = new EventEmitter();
  filteredArrayData:User[] = [];
  searchText:string = '';

  constructor() { }

  ngOnInit(): void {
    this.clearSearchText();
  }

  searchArrary() {
    const text = this.searchText.toLowerCase();
    console.log("Search Key -> ", text);
    
    this.filteredArrayData = this.data.filter(
      (user:User) => {
        return(
          user.email.toLowerCase().includes(text) ||
          user.name.first.toLowerCase().includes(text) ||
          user.name.last.toLowerCase().includes(text)
        )
      }
    );

    console.log("search method -> should get search result ->", this.filteredArrayData);
    
    this.emitFilteredData();

  }
  
  clearSearchText() {
    this.filteredArrayData = this.data;
    this.searchText = '';
    this.emitFilteredData();
  }
  
  emitFilteredData() {
    this.filteredData.emit(this.filteredArrayData);
  }


}

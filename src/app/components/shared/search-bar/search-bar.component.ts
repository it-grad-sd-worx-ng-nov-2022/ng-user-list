import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() data:User[] | any[] = [];
  @Output() filteredData: EventEmitter<User[]> = new EventEmitter();
  searchText:string = '';

  constructor() { }

  ngOnInit(): void {
    this.clearSearchText();
  }

  searchArrary() {
    const text = this.searchText.toLowerCase();
     this.filteredData = this.data.filter((user:User) => {
      return (
        user.name.first.toLowerCase().includes(text) ||
        user.name.last.toLowerCase().includes(text)

      );
        
    });
    


  }

  clearSearchText() {
    this.filteredData = this.data;
    this.searchText = '';
  }

}

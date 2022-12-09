import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() arrayTitle?:string;
  searchText:string = '';

  constructor() { }

  ngOnInit(): void {
    this.clearSearchText();
  }

  searchArrary() {

  }

  clearSearchText() {

    this.searchText = '';
  }

}

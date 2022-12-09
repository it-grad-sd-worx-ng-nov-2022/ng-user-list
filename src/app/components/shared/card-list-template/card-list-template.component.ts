import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-list-template',
  templateUrl: './card-list-template.component.html',
  styleUrls: ['./card-list-template.component.scss']
})
export class CardListTemplateComponent implements OnInit {

  @Input() title:string = "";
  @Input() list:any[] =[]; //put it to type user later

  @Output() itemSelected:EventEmitter<string> = new EventEmitter();
  
  //create a dummy data
  users = [
    {
    imageUrl:'https://www.shutterstock.com/image-vector/standard-user-icon-avatar-260nw-467859071.jpg',
    name: 'Ali Asrhar'
    },
    {
      imageUrl:'https://www.shutterstock.com/image-vector/standard-user-icon-avatar-260nw-467859071.jpg',
      name: 'Ali Asrhar'
      },
      {
        imageUrl:'https://www.shutterstock.com/image-vector/standard-user-icon-avatar-260nw-467859071.jpg',
        name: 'Ali Asrhar'
        }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}

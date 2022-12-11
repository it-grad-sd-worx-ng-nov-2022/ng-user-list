import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Id } from 'src/app/models/id';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-card-list-template',
  templateUrl: './card-list-template.component.html',
  styleUrls: ['./card-list-template.component.scss']
})
export class CardListTemplateComponent implements OnInit {

  @Input() title:string = "";
  @Input() list:User[] |any[] | Id[] = []; //import interface
  @Output() itemSelected:EventEmitter<string> = new EventEmitter();

  isViewed: boolean = false;
  isNotClicked:boolean = true;
  currentClickedId?:number;

  borders:string = 'background-color: red';
  
  //create a dummy data

  constructor() { }

  isClicked(id:number){
    if(id) {
          this.currentClickedId = id;        
          } 
  }
  ngOnInit(): void {
  }

}

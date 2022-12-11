import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Id } from 'src/app/models/id';
import { User } from 'src/app/models/user';
import { ApiService } from '../../../services/api.service';

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

  constructor(
    public api:ApiService,
  ) { }

  isClicked(item:User){
    console.log('Card list template item',item);
  }

  ngOnInit(): void {

  }

}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Id } from 'src/app/models/id';
import { User } from 'src/app/models/user';
import { ApiService } from '../../../services/api.service';
import { SelectedUserService } from '../../../services/selected-user.service';

@Component({
  selector: 'app-card-list-template',
  templateUrl: './card-list-template.component.html',
  styleUrls: ['./card-list-template.component.scss']
})
export class CardListTemplateComponent implements OnInit {

  @Input() title: string = "";
  @Input() list: User[] | any[] | Id[] = []; //import interface
  @Output() selectedUser: EventEmitter<any> = new EventEmitter();

  currentClickedId?: number | any;

  borders: string = 'background-color: red';

  //create a dummy data

  constructor(
    public api: ApiService,
    public selectedUserService: SelectedUserService,
  ) { }

  isClicked(item: User) {
    if (item) {
      this.currentClickedId = item.id;
      
      // this.selectedUserService.setSelectedUser(item);
      this.selectedUser.emit(item);

    }
  }

  ngOnInit(): void {

  }

}

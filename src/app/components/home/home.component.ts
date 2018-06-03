import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: EventService) {
    userService.getAll().subscribe(users => console.log(users));
    userService.getById({_id: '5b0ef89a73434c0c4840899c'}).subscribe(user => console.log(user));
  }
  ngOnInit() {
  }

}

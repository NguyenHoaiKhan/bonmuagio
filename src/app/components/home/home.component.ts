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
    userService.getById({_id: '5b0b48a25400a5108c4ba730'}).subscribe(user => console.log(user));
  }
  ngOnInit() {
  }

}

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
    console.log(this.dayOfWeek);
    console.log(this.numberOfDays);
    this.setArrayofCanlendar();
  }

  days: string[] = [];
  dayOfWeek: number = new Date('7/1/2018').getDay();
  numberOfDays: number = new Date(2018, 7, 0).getDate();

  setArrayofCanlendar() {
    for (let i = 1; i <= 35; i++) if (i <= this.dayOfWeek || i > this.numberOfDays + this.dayOfWeek) {
      this.days.push(' ');
    }
    else {
      this.days.push(`${i - this.dayOfWeek }`)
    }
  }
  ngOnInit() {
  }

}

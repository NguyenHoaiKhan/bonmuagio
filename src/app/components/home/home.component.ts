import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) {
    this.userService.secret('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJCTUciLCJzdWIiOiI1YjBkNmZmYTBjZTIyMzEyZWMxMWRiYzEiLCJpYXQiOjE1Mjc5MTc2NzIuNDcyLCJleHAiOjE1MjgwMDQwNzIuNDcyfQ.TVnR7pRtFSZiP1IZBiQigr9chjBI99FJYIiR4-ITeAU').subscribe(token => console.log(token));
  }

  ngOnInit() {
  }

}

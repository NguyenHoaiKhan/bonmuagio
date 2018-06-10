import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
//import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD

  @ViewChild('homePosts') homePosts: ElementRef;
  protected homePostsOffset;
  protected windowOffset;
  protected lastYOffset;
  topBarColor = 'transparent';

  @HostListener("window:scroll", ['$event']) onWindowScroll() {
    //we'll do some stuff here when the window is scrolled
      let top = window.pageYOffset;
      if (top > this.lastYOffset && top < this.homePostsOffset){
        //Scroll down
        let value = this.homePostsOffset - 70;
        window.scroll(0, value);
        this.lastYOffset = value;
      }
      this.lastYOffset = top;

      if (top <= this.homePostsOffset - 140){
        this.topBarColor = 'transparent';
      }else{
        this.topBarColor = '#06182a';
      }
  }

  constructor(public el: ElementRef) {

=======
  constructor(private userService: EventService) {
    userService.getAll().subscribe(users => console.log(users));
    userService.getById({_id: '5b0ef89a73434c0c4840899c'}).subscribe(user => console.log(user));
    console.log(this.dayOfWeek);
    console.log(this.numberOfDays);
    this.setArrayofCanlendar();
  }

  days: string[] = [];
  dayOfWeek: number = new Date('6/1/2018').getDay();
  numberOfDays: number = new Date(2018, 6, 0).getDate();

  setArrayofCanlendar() {
    for (let i = 1; i <= 35; i++) if (i <= this.dayOfWeek || i > this.numberOfDays + this.dayOfWeek) {
      this.days.push(' ');
    }
    else {
      this.days.push(`${i - this.dayOfWeek }`)
    }
>>>>>>> d35bf959317bee224be4935a34e1d469605c44a3
  }
  ngOnInit() {
    //this.homePostsOffset = this.homePosts.nativeElement.offsetTop;
    /*this.windowOffset = window.pageYOffset;
    console.log(this.homePostsOffset);
    this.lastYOffset = this.windowOffset;*/

  }

}

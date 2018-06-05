import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
//import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('homePosts') homePosts: ElementRef;
  protected homePostsOffset;
  protected windowOffset;
  protected lastYOffset;
  protected topBarColor = 'transparent';

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

  }
  ngOnInit() {
    this.homePostsOffset = this.homePosts.nativeElement.offsetTop;
    this.windowOffset = window.pageYOffset;
    this.lastYOffset = this.windowOffset;
    
  }

}

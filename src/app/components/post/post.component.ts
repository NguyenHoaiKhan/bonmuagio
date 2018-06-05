import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts = [
    {title: 'Làm lồng đèn', desc: 'dhwayd uawgdawdygaw gdagw uwagdu gawuigdiaw dawd ah'},
    {title: 'Làm lồng đèn', desc: 'dhwayd uawgdawdygaw gdagw uwagdu gawuigdiaw dawd ah'}
  ]

  constructor() { }

  ngOnInit() {
  }

}

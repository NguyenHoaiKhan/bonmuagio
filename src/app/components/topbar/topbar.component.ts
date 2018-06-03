///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit, ViewChild, HostListener, ElementRef} from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  menuList: String[] = ['TRANG CHỦ', 'SỰ KIỆN', 'TIMELINE', 'TÀI TRỢ', 'THÀNH VIÊN', 'GIỚI THIỆU'];
  isShow: boolean = true;
  divWidth = 0;
  rightPos = '-100%';
  clicked = false;
  @ViewChild('parentsDiv') parentDiv: ElementRef;
  @ViewChild('menuContainerRes') menuContainerRes: ElementRef;

  @HostListener('window:resize') onResize() {
    // guard against resize before view is rendered
    if (this.parentDiv) {
      this.divWidth = this.parentDiv.nativeElement.clientWidth;
      if (this.divWidth < 900) this.isShow = false;
      else (this.isShow = true);
    }
  }

  constructor() {
    console.clear();
  }

  /*
	ngAfterViewInit() {
	  // wait a tick to avoid one-time devMode
	  // unidirectional-data-flow-violation error
	  setTimeout(_ => this.divWidth = this.parentDiv.nativeElement.clientWidth);
	}*/

  onClickedOutside(): void {
    this.isShow = !(this.divWidth < 900 && this.isShow === true);
  }

  menuButtonClick():void {
    this.clicked = !this.clicked;

    if (this.clicked)
      this.rightPos = '0';
    else
      this.rightPos = '-100%';
  }

  ngOnInit() {
    if (this.parentDiv) {
      this.divWidth = this.parentDiv.nativeElement.clientWidth;
      if (this.divWidth < 900) this.isShow = false;
      else (this.isShow = true);
    }
  }

}

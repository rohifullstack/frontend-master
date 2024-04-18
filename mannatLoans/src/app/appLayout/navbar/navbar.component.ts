import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  todayDate: any = new Date();
  @Output() eventToggler = new EventEmitter<any>();
  constructor() {

  }

  ngOnInit(): void {

  }

  showHideSiteBar() {
    this.eventToggler.emit(true);
  }
}

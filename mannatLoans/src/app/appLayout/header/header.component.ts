import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() eventTogglerFromHeaderComponent = new EventEmitter<any>();
  constructor() {

  }

  ngOnInit(): void {

  }

  togglerHandleEvent(value: any) {
    this.eventTogglerFromHeaderComponent.emit(value);
  }
}

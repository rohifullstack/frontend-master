import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sitenav',
  templateUrl: './sitenav.component.html',
  styleUrls: ['./sitenav.component.css']
})
export class SitenavComponent {
  constructor() { }

  ngOnInit(): void {

  }

  togglerEventHandlerFromHeaderCom(value: any) {
    console.log("event trigar");
    document.querySelector("#sidenav")?.classList.toggle("collapsed");
  }
}

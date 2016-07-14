import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavBarComponent implements OnInit {
  public showNav: boolean = false;
  constructor() {}

  ngOnInit() {
  }

  toggleNav(){
    this.showNav = !this.showNav;
  }
}

import { Component } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavBarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
}


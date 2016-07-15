import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { WelcomeComponent } from './welcome';
import { NavComponent } from './nav';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [WelcomeComponent, NavComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
}

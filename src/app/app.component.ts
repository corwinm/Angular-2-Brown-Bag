import { Component } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavBarComponent]
})
export class AppComponent {
  title = 'app works!';
}


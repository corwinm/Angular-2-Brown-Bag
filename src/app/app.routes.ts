import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from "./home/home.component";

const AppRoutes = [
    //Root component routes here
    { path: '', component: HomeComponent, index: true }
];

const routes: RouterConfig = [
  ...AppRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
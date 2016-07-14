import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from "./home";
import { AboutComponent } from "./about";

import { MovieRoutes } from "./movie/movie.routes";

const AppRoutes = [
    //Root component routes here
    { path: '', component: HomeComponent, index: true },
    { path: 'about', component: AboutComponent },
    MovieRoutes
];

const routes: RouterConfig = [
  ...AppRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
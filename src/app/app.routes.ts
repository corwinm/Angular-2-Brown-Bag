import { provideRouter, RouterConfig } from '@angular/router';
import { WelcomeComponent } from './welcome';
import { AboutComponent } from './about';
import { MovieComponent } from './movie';

const AppRoutes = [
    //Root component routes here
    { path: '', component: WelcomeComponent, index: true },
    { path: 'about', component: AboutComponent },
    { path: 'movies', component: MovieComponent }
];

const routes: RouterConfig = [
  ...AppRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
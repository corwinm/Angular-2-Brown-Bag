import { MovieComponent } from "./movie.component";
import { MovieDetailComponent } from "../movie-detail";
import { MovieResultsComponent } from "../movie-results";

export const MovieRoutes = { 
    path: 'movie', 
    component: MovieComponent, 
    children: [
        { path: '', index: true },
        { path: 'results', component: MovieResultsComponent },
        { path: ':id', component: MovieDetailComponent }
    ]
};

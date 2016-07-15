import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../search-bar';
import { MovieResultsComponent } from './movie-results';
import { OmdbSearchService } from '../omdb-search.service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-movie',
  templateUrl: 'movie.component.html',
  styleUrls: ['movie.component.css'],
  directives: [SearchBarComponent, MovieResultsComponent],
  providers: [HTTP_PROVIDERS, OmdbSearchService]
})
export class MovieComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}

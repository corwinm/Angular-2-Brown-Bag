import { Component, OnInit } from '@angular/core';
import { OmdbSearchService } from '../../omdb-search.service';

@Component({
  moduleId: module.id,
  selector: 'app-movie-results',
  templateUrl: 'movie-results.component.html',
  styleUrls: ['movie-results.component.css']
})
export class MovieResultsComponent implements OnInit {
  movies: any;
  constructor(private service: OmdbSearchService) {}

  ngOnInit() {
    this.service.movies.subscribe(values => {
      this.movies = values;
    })
  }


}

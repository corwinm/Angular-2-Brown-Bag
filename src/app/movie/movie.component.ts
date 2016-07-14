import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";
import { MovieSearchComponent } from "../movie-search";
import { OmdbService, OmdbMovie } from "search-service";
import { HTTP_PROVIDERS } from "@angular/http";

import "rxjs/rx";

import { MockService  } from '../mock-service/mock-service.service';
@Component({
  moduleId: module.id,
  selector: 'app-movie',
  templateUrl: 'movie.component.html',
  styleUrls: ['movie.component.css'],
  directives: [ROUTER_DIRECTIVES, MovieSearchComponent],
  providers: [HTTP_PROVIDERS, MockService]
})
export class MovieComponent implements AfterViewInit {
  movies: any;
  //@ViewChild('search') private search: MovieSearchComponent;
  constructor(private service: MockService) {
    
  }

  ngAfterViewInit() {
    this.service.movies
      .subscribe( value => {
        console.log(`The current value is:${value}`);
        this.movies = value;
      });
  }

}

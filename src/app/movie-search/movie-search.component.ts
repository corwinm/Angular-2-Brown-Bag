import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Control, FORM_DIRECTIVES } from "@angular/common";
import { HTTP_PROVIDERS } from '@angular/http';
import { Observable, Subject } from "rxjs/Rx";

import { MockService } from '../mock-service/mock-service.service';

@Component({
  moduleId: module.id,
  selector: 'app-movie-search',
  templateUrl: 'movie-search.component.html',
  styleUrls: ['movie-search.component.css'],
  providers: [HTTP_PROVIDERS]
})
export class MovieSearchComponent implements OnInit {

  query: Observable<string>;
  private _query: Subject<string> = new Subject<string>();
  constructor(private service: MockService) {
  }
  
  ngOnInit() {
    this.query = this._query.asObservable();

    this.query.debounceTime(400)
      .subscribe(value => {
        console.log(`Call service with ${value}.`);
        this.service.getMovies(value);
      });
  }

  onKeyup(value){
    this._query.next(value);
  }
}

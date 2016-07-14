import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Observer } from 'rxjs/rx';

@Injectable()
export class MockService {

  public movies: Observable<any>;
  private _movies: Observer<any>;

  constructor(private http: Http) {
    this.movies = new Observable(observer => {this._movies = observer}).share();
  }

  getMovies(query: string) {
    this.http.get(`http://www.omdbapi.com?s=${encodeURI(query)}&y=&plot=short&r=json`)
                .map(result => result.json())
                .subscribe(x => this._movies.next(x.Search));
  }
}
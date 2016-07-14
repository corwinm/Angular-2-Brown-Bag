import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-movie-results',
  templateUrl: 'movie-results.component.html',
  styleUrls: ['movie-results.component.css']
})
export class MovieResultsComponent implements OnInit {
  query: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    var sub = this.route.params.subscribe( params => {
      this.query = params['q'];
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-movie-detail',
  templateUrl: 'movie-detail.component.html',
  styleUrls: ['movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  public movieId: string;
  private sub: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    var sub = this.route.params.subscribe( params => {
      this.movieId = params['id'];
    });
  }

}

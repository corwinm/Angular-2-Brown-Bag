import { Component, OnInit } from '@angular/core';
import { OmdbSearchService } from '../omdb-search.service';

@Component({
  moduleId: module.id,
  selector: 'app-search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private service: OmdbSearchService) {}

  ngOnInit() {
  }

  Search(query: string){
    console.log(`Searching for ${query}.`);
    this.service.getMovies(query);
  }
}

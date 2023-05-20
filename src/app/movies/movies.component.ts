import {Component, OnInit} from '@angular/core';

import {Movie} from "../model/Movie";
import {MovieServiceService} from "../services/movie-service.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  page?:string;
  movies:Movie[] | undefined;
  constructor(private service:MovieServiceService) {
  }

  ngOnInit(): void {
    let type='DUB';
    this.service.getMovies("1").subscribe(data=>{
      this.movies=data;
    });
  }
}


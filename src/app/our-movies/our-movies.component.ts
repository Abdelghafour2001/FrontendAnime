import {Component, OnInit} from '@angular/core';
import {Movie} from "../model/Movie";
import {MovieServiceService} from "../services/movie-service.service";
import {OurMovie} from "../model/OurMovie";

@Component({
  selector: 'app-our-movies',
  templateUrl: './our-movies.component.html',
  styleUrls: ['./our-movies.component.css']
})
export class OurMoviesComponent  implements OnInit{
  page?:string;
  movies:OurMovie[] | undefined;
  constructor(private service:MovieServiceService) {
  }

  ngOnInit(): void {
    this.service.getOurMovies().subscribe(data=>{
      this.movies=data;
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {Movie} from "../model/Movie";
import {MovieServiceService} from "../services/movie-service.service";
import {Genre} from "../model/Genre";

@Component({
  selector: 'app-movies-genres',
  templateUrl: './movies-genres.component.html',
  styleUrls: ['./movies-genres.component.css']
})
export class MoviesGenresComponent implements OnInit{
  genres:Genre[] | undefined;
  constructor(private service:MovieServiceService) {
  }
  more=true;
  toggle(){
    this.more= !this.more;
  }
  ngOnInit(): void {
    this.service.getAllGenres().subscribe(data=>{
      this.genres=data;
    });
  }
}

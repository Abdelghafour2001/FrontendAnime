import {Component, OnInit} from '@angular/core';
import {Movie} from "../model/Movie";
import {MovieServiceService} from "../services/movie-service.service";

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css',"../../assets/files/css/style.css"]
})
export class TvShowsComponent implements OnInit{
  page?:string;
  movies:Movie[] | undefined;
  constructor(private service:MovieServiceService) {
  }

  ngOnInit(): void {
    this.service.getTvShow("1").subscribe(data=>{
      this.movies=data;
    });
  }
}

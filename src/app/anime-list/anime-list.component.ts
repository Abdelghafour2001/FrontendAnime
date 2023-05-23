import {Component, OnInit} from '@angular/core';
import {Movie} from "../model/Movie";
import {MovieServiceService} from "../services/movie-service.service";
import {Anime} from "../model/Anime";
import {AnimeServiceService} from "../services/anime-service.service";

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit{
  page?:string;
  animes:Anime[] | undefined;
  constructor(private service:AnimeServiceService) {
  }

  ngOnInit(): void {
    this.service.getAnimeList("1").subscribe(data=>{
      this.animes=data;
    });
  }
}



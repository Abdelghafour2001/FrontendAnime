import {Component, OnInit} from '@angular/core';
import {Movie} from "../model/Movie";
import {MovieServiceService} from "../services/movie-service.service";
import {Anime} from "../model/Anime";
import {AnimeServiceService} from "../services/anime-service.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']

})
export class AnimeListComponent implements OnInit{
  animes:Anime[] | undefined;
  page='1';
  genre?:string;


  constructor(private service:AnimeServiceService,private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params:Params)=>{
        this.genre=params['genre'];
      }
    );
    if(this.genre!=null){
      this.service.getAnimeGenreList(this.genre,this.page).subscribe(data=>{
        this.animes=data;
      });
    }else{
      this.service.getAnimeList("1").subscribe(data=>{
        this.animes=data;
      });
    }

  }

  setPage(number: string) {
    this.page= number;
  }
}



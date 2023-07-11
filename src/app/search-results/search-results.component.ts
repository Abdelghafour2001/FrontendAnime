import {Component, OnInit} from '@angular/core';
import {Anime} from "../model/Anime";
import {AnimeServiceService} from "../services/anime-service.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Movie} from "../model/Movie";
import {MovieServiceService} from "../services/movie-service.service";
import {OurMovie} from "../model/OurMovie";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit{
  animes:Anime[] | undefined;
  page='1';
  query!:string;
  movies:Movie[] | undefined;

  ourmovies:OurMovie[] | undefined;

  constructor(private service:AnimeServiceService,private mservice:MovieServiceService,private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params:Params)=>{
        this.query=params['query'];
      }
    );
    let type='DUB';
    this.mservice.searchMovie(this.query).subscribe(data=>{
      this.movies=data;
    });
      this.service.searchAnime(this.query).subscribe(data=>{
        this.animes=data;
      });
    this.mservice.getOurMovies().subscribe(data=>{
      this.ourmovies=data;
    });

  }

  setPage(number: string) {
    this.page= number;
  }
}


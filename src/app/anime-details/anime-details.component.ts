import {Component, OnInit} from '@angular/core';
import {Anime} from "../model/Anime";
import {AnimeServiceService} from "../services/anime-service.service";
import {ActivatedRoute,Params, Router} from "@angular/router";
import {Episode} from "../model/Episode";

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {
  anime: Anime | undefined;
  episodesList?: Episode[];
  animeId!:string;
  genres?:string[];
  constructor(private service: AnimeServiceService,private activatedRoute: ActivatedRoute,private router:Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params:Params)=>{
        this.animeId=params['id'];
      }
    );
    // = "shingeki-no-kyojin";
    this.service.getAnimeDetails(this.animeId).subscribe(data=>{
      this.anime=data;
      this.episodesList=data?.episodesList;
      this.genres= data?.genres;
      // @ts-ignore
     /* for(let i=0; i< this.genres?.length ; i++){
          // @ts-ignore
        this.genres[i]=this.genres[i].replace(" ","-");
      }*/
    });

  }
}

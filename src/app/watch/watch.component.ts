import {Component, OnInit} from '@angular/core';
import {Anime} from "../model/Anime";
import {Episode} from "../model/Episode";
import {AnimeServiceService} from "../services/anime-service.service";
import {ActivatedRoute, Params} from "@angular/router";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  episode:Episode | undefined;
  anime: Anime | undefined;
  episodesList?: Episode[];
  animeId!:string ;
  episodeId!:string;
  sanitizedBlobUrl: any;

  genres?:string[];
  constructor(private service: AnimeServiceService,private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params:Params)=>{
        this.episodeId=params['id'];
      }
    );
    this.service.getWatchEpisode(this.episodeId).subscribe(data=>{
      this.episode=data;
      this.animeId=data.anime_info;
      this.service.getAnimeDetails(this.animeId).subscribe(data=>{
        this.anime=data;
        this.episodesList=data?.episodesList;
      });
    });
    this.sanitizedBlobUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl("https://player.anikatsu.me/index.php?id="+this.episodeId);

  }

}


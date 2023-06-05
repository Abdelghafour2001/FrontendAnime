import {Component, OnInit} from '@angular/core';
import {Episode} from "../model/Episode";
import {Anime} from "../model/Anime";
import {HistoryPayload} from "../model/History.payload";
import {AuthService} from "../services/auth.service";
import {AnimeServiceService} from "../services/anime-service.service";
import {ActivatedRoute, Params} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-watch-movie',
  templateUrl: './watch-movie.component.html',
  styleUrls: ['./watch-movie.component.css']
})
export class WatchMovieComponent implements OnInit {
  episode:Episode | undefined;
  anime: Anime | undefined;
  episodesList?: Episode[];
  animeId!:string ;
  episodeId!:string;
  sanitizedBlobUrl: any;
  historyPayload!:HistoryPayload;
  genres?:string[];
  name?:string;
  constructor(private authService: AuthService,private service: AnimeServiceService,private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.name=this.authService.getUserName();
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
        this.historyPayload = {
          name:this.animeId,
          url:this.episode?.episodeUrl,
          username:this.name,
          anime_id:this.episodeId,
          type:this.anime?.type,
          released:this.anime?.releasedDate,
          animeTitle:this.anime?.animeTitle,
          dubOrSub:this.anime?.subOrDub,
        }
        this.authService.addToHistory(this.historyPayload).subscribe(data=>{
          console.log(data);
        });
      });
    });
    this.sanitizedBlobUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl("https://player.anikatsu.me/index.php?id="+this.episodeId);


  }

}

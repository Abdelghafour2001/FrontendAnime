import {Component, OnInit} from '@angular/core';
import {Movie} from "../model/Movie";
import {MovieServiceService} from "../services/movie-service.service";
import {AnimeServiceService} from "../services/anime-service.service";
import {Anime} from "../model/Anime";

@Component({
  selector: 'app-recent-releases',
  templateUrl: './recent-releases.component.html',
  styleUrls: ['./recent-releases.component.css']
})
export class RecentReleasesComponent implements OnInit{
  page?:string;
  animes:Anime[] | undefined;
  constructor(private service:AnimeServiceService) {
  }

  ngOnInit(): void {
    let type='1';
    this.service.getRecentReleases(type,"1").subscribe(data=>{
      this.animes=data;
    });
  }
}

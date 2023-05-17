import {Component, OnInit} from '@angular/core';
import {Anime} from "../model/Anime";
import {AnimeServiceService} from "../services/anime-service.service";

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements  OnInit{
  animes:Anime[]|undefined;
  constructor(private service:AnimeServiceService) {
  }
ngOnInit() {
    this.service.getAnime().subscribe(data=>{
      this.animes=data;
    })
}

}

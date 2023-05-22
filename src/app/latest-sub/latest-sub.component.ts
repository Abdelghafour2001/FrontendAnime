import {Component, OnInit} from '@angular/core';
import {AnimeServiceService} from "../services/anime-service.service";
import {Anime} from "../model/Anime";

@Component({
  selector: 'app-latest-sub',
  templateUrl: './latest-sub.component.html',
  styleUrls: ['./latest-sub.component.css',"../../assets/files/css/style.css"]
})
export class LatestSubComponent implements OnInit{
  type?:string;
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

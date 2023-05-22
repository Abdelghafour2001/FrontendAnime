import {Component, OnInit} from '@angular/core';
import {Anime} from "../model/Anime";
import {AnimeServiceService} from "../services/anime-service.service";

@Component({
  selector: 'app-latest-dub',
  templateUrl: './latest-dub.component.html',
  styleUrls: ['./latest-dub.component.css',"../../assets/files/css/style.css"]
})
export class LatestDubComponent implements OnInit{
  type?:string;
  page?:string;
  animes:Anime[] | undefined;
  constructor(private service:AnimeServiceService) {
  }

  ngOnInit(): void {
    let type='2';
    this.service.getRecentReleases(type,"1").subscribe(data=>{
      this.animes=data;
    });
  }
}

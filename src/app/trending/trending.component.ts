import {Component, OnInit} from '@angular/core';
import {Anime} from "../model/Anime";
import {AnimeServiceService} from "../services/anime-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css','../../assets/files/css/style.css']})
export class TrendingComponent implements  OnInit{
  animes:Anime[] | undefined;
  constructor(private service:AnimeServiceService,private http:HttpClient) {
  }
ngOnInit(): void {
    this.service.getPopular().subscribe(data=>{
      this.animes=data;
    });
}

}

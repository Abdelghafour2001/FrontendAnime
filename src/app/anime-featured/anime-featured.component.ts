import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Anime} from "../model/Anime";
import {AnimeServiceService} from "../services/anime-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-anime-featured',
  templateUrl: './anime-featured.component.html',
  styleUrls: ['./anime-featured.component.css',  "../../assets/files/css/style.css"]
})
export class AnimeFeaturedComponent implements OnInit{
  fallanimes:Anime[] | undefined;
  winteranimes:Anime[] | undefined;
  summeranimes:Anime[] | undefined;
 springanimes:Anime[] | undefined;
 year?:string;
  constructor(private service:AnimeServiceService) {
  }
    ngOnInit(): void {
    let year = "2021";
this.getSummer(year);this.getWinter(year);this.getFall(year);this.getSpring(year);
  }
  getSummer(year:string){
      this.service.getSummerAnime(year).subscribe(data=>{
    this.summeranimes=data;
  });}
  getFall(year:string){
    this.service.getFallAnime(year).subscribe(data=>{
      this.fallanimes=data;
    });}
  getSpring(year:string){
    this.service.getSpringAnime(year).subscribe(data=>{
      this.springanimes=data;
    });}
  getWinter(year:string){
    this.service.getWinterAnime(year).subscribe(data=>{
      this.winteranimes=data;
    });}

}

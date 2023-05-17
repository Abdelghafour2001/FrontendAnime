import {Component, OnInit} from '@angular/core';
import {Anime} from "../model/Anime";
import {AnimeServiceService} from "../services/anime-service.service";
import {HttpClient} from "@angular/common/http";
import {Gogoanime} from "../model/Gogoanime";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements  OnInit{
  animes:Anime[] | undefined;
  constructor(private service:AnimeServiceService,private http:HttpClient) {
  }
  ngOnInit(): void {
    this.service.getPopular().subscribe(data=>{
      this.animes=data;
    });
  }

}

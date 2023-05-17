import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Anime} from "../model/Anime";
import {Gogoanime} from "../model/Gogoanime";

@Injectable({
  providedIn: 'root'
})
export class AnimeServiceService {
 url:string|undefined;
  constructor(private http:HttpClient) { }


  getPopular(){
    let url = "/api/anime/popular-anime";
    return this.http.get<Anime[]>(url);
  }
  getRecentReleases(type:string,page:string){
    let url = "/api/anime/recent-release?type="+type+"?page="+page;
    return this.http.get<Anime[]>(url);
  }
  getFallAnime(year:string){
    let url = "/api/anime/season/fall-"+year+"-anime";
    return this.http.get<Anime[]>(url);
  }
  getSummerAnime(year:string){
    let url = "/api/anime/season/summer-"+year+"-anime";
    return this.http.get<Anime[]>(url);
  }
  getSpringAnime(year:string){
    let url = "/api/anime/season/spring-"+year+"-anime";
    return this.http.get<Anime[]>(url);
  }
  getWinterAnime(year:string){
    let url = "/api/anime/season/winter-"+year+"-anime";
    return this.http.get<Anime[]>(url);
  }
}

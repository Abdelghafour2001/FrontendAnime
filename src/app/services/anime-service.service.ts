import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Anime} from "../model/Anime";
import {Episode} from "../model/Episode";

@Injectable({
  providedIn: 'root'
})
export class AnimeServiceService {
 url:string|undefined;
  constructor(private http:HttpClient) { }

  getAnimeGenreList(genre:string,page:string){
    let url = "/api/anime/genre/"+genre+"?page="+page;
    return this.http.get<Anime[]>(url);
  }
  getPopular(){
    let url = "/api/anime/popular-anime";
    return this.http.get<Anime[]>(url);
  }
  getAnimeList(page:string){
    let url = "/api/anime/animeList?page="+page;
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
  getAnimeDetails(id:string){
    let url = "/api/anime/getAnime/"+id;
    return this.http.get<Anime>(url);
  }
  getWatchEpisode(id:string){
    let url = "/api/anime/watch-episode/"+id;
    return this.http.get<Episode>(url);
  }
  searchAnime(query:string){
    let url = "/api/anime/search?keyw="+query+"&page=1";
    return this.http.get<Anime[]>(url);
  }
}

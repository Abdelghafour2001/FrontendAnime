import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Anime} from "../model/Anime";

@Injectable({
  providedIn: 'root'
})
export class AnimeServiceService {

  constructor(private http:HttpClient) { }
  Url="http://localhost:8080/anime/popular-anime";
  getAnime(){
    return this.http.get<Anime[]>(this.Url);
  }

}

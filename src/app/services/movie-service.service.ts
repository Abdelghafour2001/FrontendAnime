import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Anime} from "../model/Anime";
import {Movie} from "../model/Movie";
import {Genre} from "../model/Genre";


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  url:string|undefined;
  constructor(private http:HttpClient) { }
  getMovies(page:string){
    let url = "/api/movies/getMovies?="+page;
    return this.http.get<Movie[]>(url);
  }
  getTvShow(page:string){
    let url = "/api/movies/getTvshows?="+page;
    return this.http.get<Movie[]>(url);
  }
  getAllGenres(){
    let url = "/api/movies/all-genres";
    return this.http.get<Genre[]>(url);
  }
}

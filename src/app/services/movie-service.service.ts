import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Anime} from "../model/Anime";
import {Movie} from "../model/Movie";
import {Genre} from "../model/Genre";
import {Episode} from "../model/Episode";
import {CreatePostPayload} from "../post/create-post/create-post.payload";
import {Observable} from "rxjs";
import {CreateEpisodePayload} from "../create-episode/create-episode.payload";
import {OurMovie} from "../model/OurMovie";
import {Streaming} from "../model/Streaming";




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
  getWatchEpisode(id:string){
    let url = "/api/anime/watch-episode/"+id;
    return this.http.get<Episode>(url);
  }
  createMovie(postPayload: CreateEpisodePayload): Observable<CreateEpisodePayload> {
    return this.http.post<CreateEpisodePayload>('/api/api/admin', postPayload);
  }
  getOurMovies(){
    let url = "/api/movies/getOurMovies";
    return this.http.get<OurMovie[]>(url);
  }
  getStreamingMovie(id?:string , epId?:string){
    let url= "/api/movies/getStreaming?mediaId="+id+"&episodeId="+epId+"&server=UpCloud";
    return this.http.get<Streaming>(url);
  }
  getMovie(id:string){
    let url = "/api/movies/getMovieInfo?mediaId=" + id;
    return this.http.get<Movie>(url);

  }
  searchMovie(query:string){
    let url = "/api/movies/search/" + query;
    return this.http.get<Movie[]>(url);
  }
}

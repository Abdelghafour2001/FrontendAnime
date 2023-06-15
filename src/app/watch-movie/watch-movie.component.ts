import {Component, OnInit} from '@angular/core';
import {Episode} from "../model/Episode";
import {Anime} from "../model/Anime";
import {HistoryPayload} from "../model/History.payload";
import {AuthService} from "../services/auth.service";
import {AnimeServiceService} from "../services/anime-service.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentPayload} from "../comment/comment.payload";
import {CommentService} from "../comment/comment.service";
import {throwError} from "rxjs";
import {OurMovie} from "../model/OurMovie";
import {MovieServiceService} from "../services/movie-service.service";

@Component({
  selector: 'app-watch-movie',
  templateUrl: './watch-movie.component.html',
  styleUrls: ['./watch-movie.component.css']
})
export class WatchMovieComponent implements OnInit {
  episode:Episode | undefined;
  movies!:OurMovie[] ;
  movie?:OurMovie;
  anime: Anime | undefined;
  animeId!:string ;
  episodeId!:string;
  sanitizedBlobUrl: any;
  historyPayload!:HistoryPayload;
  genres?:string[];
  name?:string
  commentPayload!: CommentPayload;
  comments?: CommentPayload[];
  constructor(private authService: AuthService,private service: AnimeServiceService,private movieService:MovieServiceService,
                                           private activatedRoute: ActivatedRoute,
                                           private commentService: CommentService, private router: Router,private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params:Params)=>{
        this.episodeId=params['id'];
        this.commentPayload.episodeId = this.episodeId;
      }
    );
    this.ourMovie();
  }

  ourMovie(){
    this.movieService.getOurMovies().subscribe(data=>{
      this.movie=data[1];
    });
   // this.movie= this.movies[1];
    let url = this.movie?.url;
    if(url!=undefined){this.sanitizedBlobUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(url);}

  }

}

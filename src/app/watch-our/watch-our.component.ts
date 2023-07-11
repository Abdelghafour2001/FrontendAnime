import {Component, OnInit} from '@angular/core';
import {Episode} from "../model/Episode";
import {OurMovie} from "../model/OurMovie";
import {Movie} from "../model/Movie";
import {Streaming} from "../model/Streaming";
import {Anime} from "../model/Anime";
import {HistoryPayload} from "../model/History.payload";
import {CommentPayload} from "../comment/comment.payload";
import {AuthService} from "../services/auth.service";
import {AnimeServiceService} from "../services/anime-service.service";
import {MovieServiceService} from "../services/movie-service.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CommentService} from "../comment/comment.service";
import {DomSanitizer} from "@angular/platform-browser";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {throwError} from "rxjs";

@Component({
  selector: 'app-watch-our',
  templateUrl: './watch-our.component.html',
  styleUrls: ['./watch-our.component.css']
})
export class WatchOurComponent implements OnInit {
  movie:OurMovie | undefined
  streaming!:Streaming;
  episodeId!:string;
  sanitizedBlobUrl: any;
  historyPayload!:HistoryPayload;
  commentPayload!: CommentPayload;
  comments?: CommentPayload[];
  name!: string;
  commentForm!: FormGroup;
  constructor(private authService: AuthService,private service: AnimeServiceService,private movieService:MovieServiceService,
              private activatedRoute: ActivatedRoute,
              private commentService: CommentService, private router: Router,private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
    (params:Params)=>{
      this.episodeId=params['id'];
      console.log(params['id']);
      this.commentPayload.episodeId = params['id'];
    }
  );
    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });
    this.commentPayload = {
      text: '',
      episodeId: this.episodeId
    };
    this.getCommentsForEpisode();
    this.name=this.authService.getUserName();

    this.movieService.getOurMovie(this.episodeId).subscribe(data=>{
       this.movie=data;
       let url = this.movie?.url;
      this.historyPayload = {
        name:this.movie.id,
        url:this.movie.url,
        username:this.name,
        anime_id:this.episodeId,
        type:this.movie?.type,
        released:this.movie?.releaseDate,
        animeTitle:this.movie?.title,
        dubOrSub:this.movie?.image,
      }
      this.authService.addToHistory(this.historyPayload).subscribe(data=>{
        console.log(data);
      });
       if(url!=undefined){this.sanitizedBlobUrl =
         this.sanitizer.bypassSecurityTrustResourceUrl(url);}
     });
  }
  postComment() {

    this.commentPayload.text = this.commentForm.get('text')?.value;

    this.commentService.postComment(this.commentPayload).subscribe(data => {
      this.commentForm.get('text')?.setValue('');
      this.getCommentsForEpisode();
    }, error => {
      throwError(error);
    })
  }

  private getCommentsForEpisode() {
    this.commentService.getAllCommentsForEpisode(this.episodeId).subscribe(data => {
      this.comments = data;
      console.log(this.episodeId)
    }, error => {
      throwError(error);
    });
  }


}

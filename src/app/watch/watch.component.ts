import {Component, OnInit} from '@angular/core';
import {Anime} from "../model/Anime";
import {Episode} from "../model/Episode";
import {AnimeServiceService} from "../services/anime-service.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DomSanitizer} from '@angular/platform-browser';
import {AuthService} from "../services/auth.service";
import {HistoryPayload} from "../model/History.payload";
import {throwError} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentService} from "../comment/comment.service";
import {CommentPayload} from "../comment/comment.payload";
import {MovieServiceService} from "../services/movie-service.service";
import {OurMovie} from "../model/OurMovie";

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  episode:Episode | undefined;
  movies:OurMovie[] | undefined
  movie?:OurMovie;
  anime: Anime | undefined;
  episodesList?: Episode[];
  animeId!:string ;
  episodeId!:string;
  sanitizedBlobUrl: any;
  historyPayload!:HistoryPayload;
  genres?:string[];
  name?:string
  commentForm!: FormGroup;
  commentPayload!: CommentPayload;
  comments?: CommentPayload[];
  inputData: string = '';

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
    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });
    this.commentPayload = {
      text: '',
      episodeId: this.episodeId
    };
    this.name=this.authService.getUserName();

    this.getCommentsForEpisode(this.episodeId);
    this.service.getWatchEpisode(this.episodeId).subscribe(data=>{
      this.episode=data;
      this.animeId=data.anime_info;
      this.service.getAnimeDetails(this.animeId).subscribe(data=>{
        this.anime=data;
        this.episodesList=data?.episodesList;
        this.historyPayload = {
          name:this.animeId,
          url:this.episode?.episodeUrl,
          username:this.name,
          anime_id:this.episodeId,
          type:this.anime?.type,
          released:this.anime?.releasedDate,
          animeTitle:this.anime?.animeTitle,
          dubOrSub:this.anime?.subOrDub,
        }
        this.authService.addToHistory(this.historyPayload).subscribe(data=>{
          console.log(data);
        });
      });
    });
    this.sanitizedBlobUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl("https://player.anikatsu.me/index.php?id="+this.episodeId);


  }


  postComment() {
    this.commentPayload.text = this.commentForm.get('text1')?.value;
    this.commentPayload.text= this.inputData;
    console.log(this.inputData);
    console.log( this.commentForm.get('text1')?.value);
    this.commentService.postComment(this.commentPayload).subscribe(data => {
      this.commentForm.get('text')?.setValue('');
      this.getCommentsForEpisode(this.episodeId);
    }, error => {
      throwError(error);
    })
  }


  private getCommentsForEpisode(epid:string) {
    this.commentService.getAllCommentsForEpisode(epid).subscribe(data => {
      this.comments = data;
      console.log("episode id "+epid)
    }, error => {
      throwError(error);
    });
  }

}


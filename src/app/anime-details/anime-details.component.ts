import {Component, OnInit} from '@angular/core';
import {Anime} from "../model/Anime";
import {AnimeServiceService} from "../services/anime-service.service";
import {ActivatedRoute,Params, Router} from "@angular/router";
import {Episode} from "../model/Episode";
import {AuthService} from "../services/auth.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HistoryPayload} from "../model/History.payload";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {
  anime: Anime | undefined;
  isLoggedIn?: boolean;
  username?: string;
  historyPayload!:HistoryPayload;

  public open(modal: any): void {
    this.modalService.open(modal);
  }
  activ=true;
  toggle(){
    this.activ= !this.activ;
  }
  activUserdrop=true;
  toggleUser(){
    this.activUserdrop= !this.activUserdrop;
  }
  name?:string

  episodesList?: Episode[];
  animeId!:string;
  genres?:string[];
  constructor( private toastr: ToastrService,private service: AnimeServiceService,private activatedRoute: ActivatedRoute,private router:Router,private authService: AuthService,private modalService:NgbModal) {
  }

  ngOnInit(): void {
    this.name=this.authService.getUserName();
    this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
    this.authService.username.subscribe((data: string) => this.username = data);
    this.isLoggedIn = this.authService.isLoggedIn();
    this.activatedRoute.params.subscribe(
      (params:Params)=>{
        this.animeId=params['id'];
      }

    );
    this.username = this.authService.getUserName();
    this.service.getAnimeDetails(this.animeId).subscribe(data=>{
      this.anime=data;
      this.episodesList=data?.episodesList;
      this.genres= data?.genres;
      this.episodesList=data?.episodesList;
      this.historyPayload = {
        name:this.animeId,
        username:this.name,
        url:this.anime?.animeUrl,
        anime_id:this.animeId,
        type:this.anime?.type,
        animeTitle:this.anime?.animeTitle,
      }
     /* this.authService.addToWatchlist(this.historyPayload).subscribe(data=>{
        console.log(data);
      });*/
    });

  }
  addWatchList(){
    this.authService.addToWatchlist(this.historyPayload).subscribe(data=>{
    this.toastr.success('Added to watchlist');
      console.log(data);
    });
  }
}

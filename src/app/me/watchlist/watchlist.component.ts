import {Component, OnInit} from '@angular/core';
import {AnimeServiceService} from "../../services/anime-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HistoryPayload} from "../../model/History.payload";

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  historyPayload!:HistoryPayload[];
  username!:string;
  constructor(private service: AnimeServiceService,private activatedRoute: ActivatedRoute,private router:Router,
              private authService: AuthService) {
  }
  ngOnInit(): void {
    this.authService.getWatchlist().subscribe(data=>
    this.historyPayload=data);
this.username=this.authService.getUserName();  }

}

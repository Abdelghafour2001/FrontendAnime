import {Component, OnInit} from '@angular/core';
import {Anime} from "../model/Anime";
import {AnimeServiceService} from "../services/anime-service.service";
import {ActivatedRoute, Params} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {HistoryPayload} from "../model/History.payload";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{
  page='1';
  historyPayload!:HistoryPayload[];
  username!:string;


  constructor(private service:AnimeServiceService,private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getHistory().subscribe(data=>
  this.historyPayload=data
    );
  this.username=this.authService.getUserName();

    }

  toDateTime(nm: number | undefined){
    let dateTime: Date;
    if(nm!=undefined)
      dateTime = new Date(nm*1000); // Multiply by 1000 to convert seconds to milliseconds
    else
      dateTime=new Date(1689006162 * 1000);
    return dateTime.toISOString();
}

  setPage(number: string) {

    this.page= number;
  }
}

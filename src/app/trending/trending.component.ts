import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Anime} from "../model/Anime";
import {AnimeServiceService} from "../services/anime-service.service";
import {HttpClient} from "@angular/common/http";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SwiperOptions} from "swiper";
import {auto} from "@popperjs/core";

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css','../../assets/files/css/style.css']})
export class TrendingComponent implements  OnInit{
  animes:Anime[] | undefined;
  @ViewChild('slide') input?: ElementRef;
  constructor(private service:AnimeServiceService,private http:HttpClient,private modalService:NgbModal) { }
  public open(modal: any): void {
    this.modalService.open(modal);
  }
ngOnInit(): void {
    this.service.getPopular().subscribe(data=>{
      this.animes=data;
    });
}
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-notification',
      clickable: true
    },
    navigation: {
      nextEl: '.navi-next',
      prevEl: '.navi-prev'
    },
    spaceBetween: 30,
    centeredSlides:true,
    slidesPerView:6,

  };
}

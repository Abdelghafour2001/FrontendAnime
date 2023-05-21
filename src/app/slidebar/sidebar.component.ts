import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SwiperOptions} from "swiper";
import {auto} from "@popperjs/core";
// register Swiper custom elements

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  implements  OnInit{
  ngOnInit(): void {
  }

  constructor(private modalService:NgbModal) { }
  public open(modal: any): void {
    this.modalService.open(modal);
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

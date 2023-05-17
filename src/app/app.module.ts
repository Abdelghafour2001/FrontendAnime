import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './slidebar/sidebar.component';
import { TrendingComponent } from './trending/trending.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderSidenavComponent } from './header/header-sidenav/header-sidenav.component';
import { SwiperSlideComponent } from './slidebar/swiper-slide/swiper-slide.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {AnimeServiceService} from "./services/anime-service.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TrendingComponent,
    SidenavComponent,
    HeaderSidenavComponent,

    SwiperSlideComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    //AppRoutingModule
  ],
  providers: [AnimeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

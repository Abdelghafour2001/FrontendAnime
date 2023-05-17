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
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {AnimeServiceService} from "./services/anime-service.service";
import { AnimeFeaturedComponent } from './anime-featured/anime-featured.component';
import { LatestDubComponent } from './latest-dub/latest-dub.component';
import { LatestSubComponent } from './latest-sub/latest-sub.component';
import { ContinueWatchingComponent } from './continue-watching/continue-watching.component';
import { GenresComponent } from './sidenav/genres/genres.component';
import { TrendingsidenavComponent } from './sidenav/trendingsidenav/trendingsidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TrendingComponent,
    SidenavComponent,
    HeaderSidenavComponent,
    HomeComponent,
    AnimeFeaturedComponent,
    LatestDubComponent,
    LatestSubComponent,
    ContinueWatchingComponent,
    GenresComponent,
    TrendingsidenavComponent,

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

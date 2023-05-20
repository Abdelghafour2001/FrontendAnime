import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './slidebar/sidebar.component';
import { TrendingComponent } from './trending/trending.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderSidenavComponent } from './header/header-sidenav/header-sidenav.component';
import { HomeComponent } from './home/home.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AnimeServiceService} from "./services/anime-service.service";
import { AnimeFeaturedComponent } from './anime-featured/anime-featured.component';
import { LatestDubComponent } from './latest-dub/latest-dub.component';
import { LatestSubComponent } from './latest-sub/latest-sub.component';
import { ContinueWatchingComponent } from './continue-watching/continue-watching.component';
import { GenresComponent } from './sidenav/genres/genres.component';
import { TrendingsidenavComponent } from './sidenav/trendingsidenav/trendingsidenav.component';
import { ToastrModule } from 'ngx-toastr';
import { NotfoundComponent } from './notfound/notfound.component';
import { MeComponent } from './me/me.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {AppRoutingModule} from "./app-routing.module";
import {TokenInterceptor} from "./token-interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxWebstorageModule} from "ngx-webstorage";
import {AuthService} from "./services/auth.service";
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import {MovieServiceService} from "./services/movie-service.service";


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

    NotfoundComponent,
    MeComponent,
    LoginComponent,
    SignupComponent,
    MoviesComponent,
    TvShowsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
   // FontAwesomeModule,
    NgbModule,EditorModule,
  ],
  providers: [AnimeServiceService,MovieServiceService,AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

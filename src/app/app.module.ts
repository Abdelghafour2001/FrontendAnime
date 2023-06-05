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
import { HomeComponent } from './home/home.component';
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
import { MoviesGenresComponent } from './movies-genres/movies-genres.component';
import {HeaderSidenavComponent} from "./header/header-sidenav/header-sidenav.component";
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { RecentReleasesComponent } from './recent-releases/recent-releases.component';
import { DisqusComponent } from './disqus/disqus.component';
import { WatchComponent } from './watch/watch.component';
import {ViewPostComponent} from "./post/view-post/view-post.component";
import {CreatePostComponent} from "./post/create-post/create-post.component";
import {SubredditSideBarComponent} from "./shared/subreddit-side-bar/subreddit-side-bar.component";
import {CreateSubredditComponent} from "./subreddit/create-subreddit/create-subreddit.component";
import {ListSubredditsComponent} from "./subreddit/list-subreddits/list-subreddits.component";
import {VoteButtonComponent} from "./shared/vote-button/vote-button.component";
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import {PostTileComponent} from "./shared/post-tile/post-tile.component";
import { WatchlistComponent } from './me/watchlist/watchlist.component';
import { AdminComponent } from './admin/admin.component';
import { CommentComponent } from './comment/comment.component';
import { WatchMovieComponent } from './watch-movie/watch-movie.component';

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
    PostTileComponent,
    TrendingsidenavComponent,
    ViewPostComponent,
    CreatePostComponent,
    SubredditSideBarComponent,
    CreateSubredditComponent,
    ListSubredditsComponent,
    NotfoundComponent,
    MeComponent,
    LoginComponent,
    SignupComponent,
    MoviesComponent,
    TvShowsComponent,
    MoviesGenresComponent,
    AnimeListComponent,
    AnimeDetailsComponent,
    RecentReleasesComponent,
    DisqusComponent,
    WatchComponent,
    VoteButtonComponent,
    BlogHomeComponent,
    SideBarComponent,
    WatchlistComponent,
    AdminComponent,
    CommentComponent,
    WatchMovieComponent

  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxUsefulSwiperModule,
        AppRoutingModule,
        NgxWebstorageModule.forRoot(),
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        NgbModule, EditorModule,
    ],
  providers: [AnimeServiceService,MovieServiceService,AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForgotpasswordComponent} from "./forgotpassword/forgotpassword.component";
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {AfterAuthGuard} from "./guards/after-auth.guard";
import {NotfoundComponent} from "./notfound/notfound.component";
import {MeComponent} from "./me/me.component";
import {MoviesComponent} from "./movies/movies.component";
import {TvShowsComponent} from "./tv-shows/tv-shows.component";
import {AnimeListComponent} from "./anime-list/anime-list.component";
import {AnimeDetailsComponent} from "./anime-details/anime-details.component";
import {WatchComponent} from "./watch/watch.component";
import {ViewPostComponent} from "./post/view-post/view-post.component";
import {CreatePostComponent} from "./post/create-post/create-post.component";
import {ListSubredditsComponent} from "./subreddit/list-subreddits/list-subreddits.component";
import {CreateSubredditComponent} from "./subreddit/create-subreddit/create-subreddit.component";
import {BlogHomeComponent} from "./blog-home/blog-home.component";
import {WatchlistComponent} from "./me/watchlist/watchlist.component";
import {WatchMovieComponent} from "./watch-movie/watch-movie.component";
import {OurMoviesComponent} from "./our-movies/our-movies.component";
import {CreateEpisodeComponent} from "./create-episode/create-episode.component";
import {HistoryComponent} from "./history/history.component";

const routes: Routes = [
  { path:"", component:HomeComponent},
  { path:"home", component:HomeComponent},
  { path:"register", component:SignupComponent},
  { path:"movies", component:MoviesComponent} ,
  {path:"movie/:id", component:WatchMovieComponent} ,
  {path:"tv",component:TvShowsComponent},
  {path:"anime",component:AnimeListComponent},
  { path:"login", component:LoginComponent},
   { path:"me", component:MeComponent},
  { path: 'me/:id', component: MeComponent },
  { path: 'user/watchlist', component: WatchlistComponent },
  { path: 'anime/:id', component: AnimeDetailsComponent },
  { path: 'watch/:id', component: WatchComponent },
  { path: 'blog', component: BlogHomeComponent },
  { path: 'view-post/:id', component: ViewPostComponent },
  { path: 'list-subreddits', component: ListSubredditsComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'genre/:genre', component: AnimeListComponent },
  { path: 'create-subreddit', component: CreateSubredditComponent },
  { path: 'our-movies', component: OurMoviesComponent },
  { path: 'our-movies/:id', component: WatchMovieComponent },
  { path: 'create-movie', component: CreateEpisodeComponent },
  { path:"user/viewHistory", component:HistoryComponent},
  //{ path:"emailconfirmation", component:UserConfirmationComponent},
  { path:"forgotpassword", component:ForgotpasswordComponent},
  //{ path:"resetpassword", component:ResetpasswordComponent},
  { path:"**", component:NotfoundComponent} ,


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

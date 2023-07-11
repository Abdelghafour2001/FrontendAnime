import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import {SearchResultsComponent} from "./search-results/search-results.component";
import {AdminComponent} from "./admin/admin.component";
import {WatchOurComponent} from "./watch-our/watch-our.component";
import {ChangepasswordComponent} from "./changepassword/changepassword.component";

const routes: Routes = [
  { path:"", component:HomeComponent},
  { path:"home", component:HomeComponent},
  { path:"register", component:SignupComponent},
  { path:"movies", component:MoviesComponent} ,
  {path:"movie/:id", component:WatchMovieComponent, canActivate: [AuthGuard] },
  {path:"tv/:id", component:WatchMovieComponent, canActivate: [AuthGuard] },

  {path:"tv",component:TvShowsComponent},
  {path:"anime",component:AnimeListComponent},
  { path:"login", component:LoginComponent},
   { path:"me", component:MeComponent, canActivate: [AuthGuard] },
  { path: 'me/:id', component: MeComponent , canActivate: [AuthGuard] },
  { path: 'user/watchlist', component: WatchlistComponent , canActivate: [AuthGuard] },
  { path: 'anime/:id', component: AnimeDetailsComponent },
  { path: 'search/:query', component: SearchResultsComponent },
  { path:"admin", component:AdminComponent, canActivate: [AfterAuthGuard] },
  { path: 'watch/:id', component: WatchComponent , canActivate: [AuthGuard] },
  { path: 'blog', component: BlogHomeComponent , canActivate: [AuthGuard] },
  { path: 'view-post/:id', component: ViewPostComponent, canActivate: [AuthGuard] },
  { path: 'list-subreddits', component: ListSubredditsComponent , canActivate: [AuthGuard] },
  { path: 'create-post', component: CreatePostComponent , canActivate: [AuthGuard] },
  { path: 'genre/:genre', component: AnimeListComponent },
  { path: 'create-subreddit', component: CreateSubredditComponent , canActivate: [AuthGuard] },
  { path: 'our-movies', component: OurMoviesComponent },
  { path: 'our-movies/:id', component: WatchOurComponent , canActivate: [AuthGuard] },
  { path: 'create-movie', component: CreateEpisodeComponent , canActivate: [AfterAuthGuard] },
  { path:"user/viewHistory", component:HistoryComponent, canActivate: [AuthGuard] },
  //{ path:"emailconfirmation", component:UserConfirmationComponent},
  { path:"user/changepass", component:ChangepasswordComponent, canActivate: [AuthGuard] },
  { path:"**", component:NotfoundComponent} ,


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

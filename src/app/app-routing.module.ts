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

const routes: Routes = [
  { path:"", component:HomeComponent},
  { path:"home", component:HomeComponent},
  { path:"register", component:SignupComponent},
  { path:"movies", component:MoviesComponent} ,
  {path:"tv",component:TvShowsComponent},
  {path:"anime",component:AnimeListComponent},
  { path:"login", component:LoginComponent},
  { path:"me", component:MeComponent},
  { path: 'me/:name', component: MeComponent },
  { path: 'anime/:id', component: AnimeDetailsComponent },
  { path: 'watch/:id', component: WatchComponent },
//  { path:"emailconfirmation", component:UserConfirmationComponent},
  { path:"forgotpassword", component:ForgotpasswordComponent},
//  { path:"resetpassword", component:ResetpasswordComponent},
  { path:"**", component:NotfoundComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

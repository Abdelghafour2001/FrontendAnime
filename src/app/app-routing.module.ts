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

const routes: Routes = [
  { path:"", component:HomeComponent, canActivate: [AuthGuard]},
  { path:"home", component:HomeComponent, canActivate: [AuthGuard]},
  { path:"register", component:SignupComponent, canActivate: [AfterAuthGuard]},
  { path:"login", component:LoginComponent, canActivate: [AfterAuthGuard]},
  { path:"me", component:MeComponent, canActivate: [AuthGuard]},
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

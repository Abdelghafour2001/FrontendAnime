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
import { HsnItemsComponent } from './header/header-sidenav/hsn-items/hsn-items.component';
import { SidebarSubsTypesComponent } from './header/header-sidenav/sidebar-subs-types/sidebar-subs-types.component';
import { SwiperSlideComponent } from './slidebar/swiper-slide/swiper-slide.component';
import { HomeComponent } from './home/home.component';
import { TrendingItemComponent } from './trending/trending-item/trending-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TrendingComponent,
    SidenavComponent,
    HeaderSidenavComponent,
    HsnItemsComponent,
    SidebarSubsTypesComponent,
    SwiperSlideComponent,
    HomeComponent,
    TrendingItemComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

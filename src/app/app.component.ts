import { Component } from '@angular/core';
import {AnimeServiceService} from "./services/anime-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../assets/files/css/bootstrap.min.css','../assets/files/css/min.css',
    '../assets/files/css/style.css','../assets/files/css/jquery-ui.css'],
  providers:[AnimeServiceService]
})
export class AppComponent {

}

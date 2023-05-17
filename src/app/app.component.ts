import { Component } from '@angular/core';
import {AnimeServiceService} from "./services/anime-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AnimeServiceService]
})
export class AppComponent {

}

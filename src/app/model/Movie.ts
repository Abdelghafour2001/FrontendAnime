import {Episode} from "./Episode";

export class Movie{
  id?: string;
  title?: string;
  url?:string;
  image?: string;
  releaseDate?: string;
  duration?: string;
  type?: string;
  seasons?: string[];
  lastEpisodes?: string[];
  cover?: string;
  description?: string;
  genres?: string[];
 episodes!: Episode[];
 productions?: string[];
 casts?: string[];
 // "country": {
 //   "title": "United States of America",
 //   "url": "country/us"
 // },

  tags?: string;
  rating?: string;

  quality?: string;
};



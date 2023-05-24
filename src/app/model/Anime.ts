import {Episode} from "./Episode";

export class Anime{
    animeId?: string;
    type?: string;
    episodeId?: string;
  subOrDub?: string;
    animeTitle?: string;
    animeImg?: string;
  episodeNum?: number | string;
    status?: string;
  animeUrl?: string;
  releasedDate?: string;
  genres?: string[];
  otherNames?: string[] | string;
  synopsis?: string;
  totalEpisodes?: number | string;
  episodesList?: Episode[];

  };



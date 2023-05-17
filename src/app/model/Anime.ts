export class Anime{
    animeId?: string;
    animeTitle?: string;
    imgUrl?: string;
    status?: string;
  };

  export type GogoEpisode = {
    episodeId?: string;
    episodeNum?: number | string;
    episodeUrl?: string;
  };

  export type Gogoanime = {
    animeId?: string;
    type?: string;
    animeTitle?: string;
    animeImg?: string;
    status?: string;
    genres?: string[];
    otherNames?: string[] | string;
    synopsis?: string;
    totalEpisodes?: number | string;
    episodesList?: GogoEpisode[];
  };


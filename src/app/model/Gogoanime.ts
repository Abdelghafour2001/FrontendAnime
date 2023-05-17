import {GogoEpisode} from "./GogoEpisode";

export class Gogoanime {
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

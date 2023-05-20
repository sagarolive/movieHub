export interface Person {
  id: number;
  name: string;
  deathday: any;
  homepage: any;
  adult: boolean;
  gender: number;
  imdb_id: string;
  birthday: string;
  biography: string;
  popularity: number;
  profile_path: string;
  tv_credits: TvCredits;
  place_of_birth: string;
  also_known_as: string[];
  movie_credits: MovieCredits;
  known_for_department: string;
}

export interface Profile {
  width: number;
  height: number;
  iso_639_1: any;
  file_path: string;
  vote_count: number;
  aspect_ratio: number;
  vote_average: number;
}

export interface MovieCredits {
  cast: PersonAsMovieCast[];
  crew: any[];
}

export interface PersonAsMovieCast {
  id: number;
  title: string;
  order: number;
  adult: boolean;
  video: boolean;
  overview: string;
  character: string;
  credit_id: string;
  popularity: number;
  vote_count: number;
  genre_ids: number[];
  poster_path: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
  original_title: string;
  original_language: string;
}

export interface TvCredits {
  cast: PersonAsTvCast[];
  crew: any[];
}

export interface PersonAsTvCast {
  id: number;
  name: string;
  adult: boolean;
  overview: string;
  character: string;
  credit_id: string;
  popularity: number;
  vote_count: number;
  genre_ids: number[];
  poster_path: string;
  vote_average: number;
  backdrop_path: string;
  original_name: string;
  episode_count: number;
  first_air_date: string;
  origin_country: string[];
  original_language: string;
}

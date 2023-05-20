import { RecommendedMovie } from "@/types/movie";
import React, { FC } from "react";
import { MovieCard, Slider } from "../common";

const MediaCarousel: FC<RecommendedMovie> = ({ results }) => {
  const topTenRecommendedMovies = results?.slice(0, 10);

  return (
    <div>
      <h2 className="text-2xl text-gray-300 font-bold mb-5">Similar Movies</h2>
      <Slider>
        {topTenRecommendedMovies?.map((movie: any) => (
          <MovieCard {...movie} />
        ))}
      </Slider>
    </div>
  );
};

export default MediaCarousel;

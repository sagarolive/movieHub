import { useGetTrendingMovies } from "@/hooks";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { MovieCard, Slider } from "../common";

const TrendingTvSeries = () => {
  const { data, isLoading } = useGetTrendingMovies({
    type: "tv",
    query: "trendingTvSeries",
  });

  if (isLoading) {
    return (
      <div className="space-y-3 p-2">
        <div className="h-2 bg-gray-700 w-64 rounded-full"></div>
        <Carousel
          showThumbs={false}
          showArrows={false}
          centerMode={true}
          centerSlidePercentage={100 / 9}
          showIndicators={false}
          showStatus={false}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div className="h-64  bg-gray-700  rounded-md " key={item}></div>
          ))}
        </Carousel>
      </div>
    );
  }
  return (
    <div className="space-y-3">
      <h2 className="text-gray-400 font-semibold text-lg">
        Trending TV Series
      </h2>
      <Slider>
        {data?.results?.map((result: any) => (
          <MovieCard {...result} />
        ))}
      </Slider>
    </div>
  );
};

export default TrendingTvSeries;

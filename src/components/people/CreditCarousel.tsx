import {
  PLACEHOLDER_IMAGE_URL,
  TMDB_IMAGE_BASE_URL,
} from "@/constants/constants";
import { MovieCredits, TvCredits } from "@/types/people";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { MovieCard, Slider } from "../common";

const Credit: FC<MovieCredits | TvCredits> = ({ cast }) => {
  const movies = cast.slice(0, 10);
  const router = useRouter();

  return (
    <div>
      <h2 className="text-2xl text-gray-300 font-bold mb-5">
        Featured {"name" in cast[0] ? "TV Series" : "Movies"}
      </h2>
      <Slider>
        {movies?.map((movie: any) => (
          <MovieCard {...movie} />
        ))}
      </Slider>
    </div>
  );
};

export default Credit;

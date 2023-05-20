import {
  PLACEHOLDER_IMAGE_URL,
  TMDB_IMAGE_BASE_URL,
} from "@/constants/constants";
import { Movie } from "@/types";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const MovieCard: FC<
  Movie & {
    first_air_date: string;
    name: string;
  }
> = ({
  title,
  vote_average,
  release_date,
  poster_path,
  id,
  name,
  first_air_date,
}) => {
  const router = useRouter();
  return (
    <div className="border-0 cursor-pointer">
      <div className="relative  w-full group">
        <div className="aspect-w-2 aspect-h-3 w-full overflow-hidden rounded-lg bg-gray-700">
          <Image
            alt="card"
            src={
              poster_path
                ? `${TMDB_IMAGE_BASE_URL}${poster_path}`
                : PLACEHOLDER_IMAGE_URL
            }
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            className="rounded-md duration-700 ease-in-out"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-0 bg-opacity-0 flex items-center justify-center bg-black group-hover:opacity-100 group-hover:bg-opacity-40 transition-opacity ">
          <BsFillPlayCircleFill
            onClick={() =>
              router.push(
                `/${
                  router.pathname.includes("movies") ? "movies" : "tv-shows"
                }/${id}`
              )
            }
            className="text-teal-400 w-20 h-16"
          />
        </div>
      </div>

      <div className="py-2 space-y-1">
        <h4 className="text-sm text-gray-200 truncate">{title || name}</h4>
        <div className="flex items-center justify-between text-gray-400 text-xs">
          <div className="flex space-x-1">
            <div>
              {new Date(release_date! || first_air_date!).toLocaleDateString(
                "en-US",
                {
                  dateStyle: "medium",
                }
              )}
            </div>
          </div>
          <div className="border border-gray-400 px-1 rounded-sm">
            {vote_average?.toFixed(1)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

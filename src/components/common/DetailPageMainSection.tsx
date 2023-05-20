import Image from "next/image";
import React, { FC, useState } from "react";

//ThirdParty imports
import YouTube from "react-youtube";
import ReactModal from "react-modal";
import { RxCross2 } from "react-icons/rx";
import { BsPlayCircle } from "react-icons/bs";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

//Constants imports
import { TMDB_IMAGE_BASE_URL } from "@/constants/constants";

//Types imports
import { Genre, VideoList } from "@/types/movie";

//Styles imports
import "react-circular-progressbar/dist/styles.css";

interface IMovieDetailMainSectionProps {
  backdrop_path: string;
  title: string;
  overview: string;
  genres: Genre[];
  release_date: string;
  tagline: string;
  vote_average: number;
  poster_path: string;
  runtime: number;
  status: string;
  budget: number;
  revenue: number;
  original_language: string;
  videos: VideoList;
}
const DetailPageMainSection: FC<IMovieDetailMainSectionProps> = ({
  backdrop_path,
  genres,
  overview,
  release_date,
  tagline,
  title,
  vote_average,
  poster_path,
  runtime,
  status,
  budget,
  revenue,
  original_language,
  videos,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const trailer =
    videos?.results?.find((video) => video.name === "Official Trailer") ??
    videos?.results[0];

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.8)",
          },
          content: {
            padding: "0",
            border: "none",
          },
        }}
      >
        <div className="w-full h-full relative">
          <div className="absolute p-2 flex justify-between items-center w-full bg-black">
            <h2 className="text-gray-200">Play Trailer</h2>
            <RxCross2
              className="text-gray-200 w-6 h-6 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <YouTube
            videoId={trailer?.key}
            style={{
              width: "100%",
              height: "100%",
              paddingTop: "1.8rem",
            }}
            opts={{
              width: "100%",
              height: "100%",

              playerVars: {
                autoplay: 1,
                controls: 0,
                cc_load_policy: 0,
                fs: 0,
                iv_load_policy: 0,
                modestbranding: 0,
                rel: 0,
                showinfo: 0,
              },
            }}
          />
        </div>
      </ReactModal>

      <div
        style={{
          backgroundImage: `url(${TMDB_IMAGE_BASE_URL}${backdrop_path})`,
        }}
        className="  bg-center  bg-cover"
      >
        <div className="flex w-full space-x-4 bg-blue-950 bg-opacity-80 p-6">
          <div className="hidden lg:block">
            <Image
              alt={title}
              src={`${TMDB_IMAGE_BASE_URL}${poster_path}`}
              height={500}
              width={300}
              style={{
                borderRadius: "3%",
              }}
            />
          </div>
          <div className="flex-1 space-y-5">
            <h1 className="text-3xl font-semibold text-gray-300">{title}</h1>
            <h3 className="text-gray-300 italic">{tagline}</h3>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12">
                <CircularProgressbar
                  value={parseInt(String(vote_average)) * 10}
                  maxValue={100}
                  minValue={0}
                  styles={buildStyles({
                    pathColor: "#2DD4BF",
                  })}
                  text={`${parseInt(String(vote_average)) * 10}%`}
                />
              </div>

              <div
                onClick={() => setIsOpen(true)}
                className=" text-gray-200 flex  items-center cursor-pointer hover:text-gray-400"
              >
                <BsPlayCircle className="mr-2" />
                Play Trailer
              </div>
            </div>

            <div className="text-gray-300 lg:w-3/4">
              <h2 className="font-medium">Overview</h2>
              <p className="">{overview}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-gray-300">
              <div className="flex flex-col ">
                <span className="font-medium ">Release Date </span>
                <div className="text-sm">
                  {new Date(release_date).toLocaleDateString("en-US", {
                    dateStyle: "medium",
                  })}
                </div>
              </div>

              <div className="flex flex-col ">
                <span className="font-medium">Runtime </span>
                <div className="text-sm">{runtime} mins</div>
              </div>
              <div className="flex flex-col ">
                <span className="font-medium">Status </span>
                <div className="text-sm">{status}</div>
              </div>
              <div className="flex flex-col ">
                <span className="font-medium">Budget </span>
                <div className="text-sm">
                  ${budget ? budget?.toLocaleString("en-US") : "0"}.00
                </div>
              </div>
              <div className="flex flex-col ">
                <span className="font-medium">Revenue </span>
                <div className="text-sm">
                  ${revenue ? revenue?.toLocaleString("en-US") : "0"}.00
                </div>
              </div>
              <div className="flex flex-col ">
                <span className="font-medium">Language </span>
                <div className="text-sm">English</div>
              </div>
              <div className=" flex  flex-col space-x-1 ">
                <span className="font-medium">Genre</span>
                <div>
                  {genres?.map((genre, index) => (
                    <span className="text-sm">{`${genre.name}${
                      index === genres.length - 1 ? "" : ","
                    }`}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPageMainSection;

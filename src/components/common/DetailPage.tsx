import React, { FC } from "react";

//Components imports
import CastCarousel from "./CastCarousel";
import MediaCarousel from "./MediaCarousel";
import DetailPageMainSection from "./DetailPageMainSection";

const DetailPage: FC<any> = ({
  title,
  genres,
  status,
  budget,
  videos,
  tagline,
  runtime,
  credits,
  revenue,
  overview,
  poster_path,
  release_date,
  vote_average,
  backdrop_path,
  recommendations,
  original_language,
  episode_run_time,
  first_air_date,
  name,
}) => {
  return (
    <div className="flex flex-col space-y-8">
      <DetailPageMainSection
        title={title! || name}
        status={status!}
        budget={budget!}
        genres={genres!}
        videos={videos!}
        revenue={revenue!}
        runtime={runtime! || episode_run_time}
        tagline={tagline!}
        overview={overview!}
        poster_path={poster_path!}
        release_date={release_date! || first_air_date}
        vote_average={vote_average!}
        backdrop_path={backdrop_path!}
        original_language={original_language!}
      />
      <CastCarousel {...credits!} />
      <MediaCarousel {...recommendations!} />
    </div>
  );
};

export default DetailPage;

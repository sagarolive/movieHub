import { Credits } from "@/types/movie";
import React, { FC } from "react";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { Slider } from "../common";
import CastCard from "./CastCard";

const CastCarousel: FC<Credits> = ({ cast }) => {
  const topTenCast = cast?.slice(0, 20);
  return (
    <div>
      <h1 className="text-gray-200 mb-5 font-semibold text-2xl">
        Top Billed Cast
      </h1>
      <Slider>
        {topTenCast?.map((item) => (
          <CastCard
            key={item?.id}
            id={item.id}
            name={item?.name}
            profileImage={item?.profile_path}
            characterName={item?.character}
          />
        ))}
      </Slider>
    </div>
  );
};

export default CastCarousel;

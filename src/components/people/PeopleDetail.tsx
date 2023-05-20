import { TMDB_IMAGE_BASE_URL } from "@/constants/constants";
import { Person } from "@/types";

import Image from "next/image";
import React, { FC } from "react";
import CreditCarousel from "./CreditCarousel";

const PeopleDetail: FC<Person> = ({
  name,
  gender,
  birthday,
  biography,
  tv_credits,
  profile_path,
  also_known_as,
  movie_credits,
  place_of_birth,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex w-full space-x-4 bg-teal-800  rounded-md bg-opacity-30 p-6">
        <div className="hidden lg:block">
          <Image
            alt={name}
            src={`${TMDB_IMAGE_BASE_URL}${profile_path}`}
            height={500}
            width={300}
            style={{
              borderRadius: "3%",
            }}
          />
        </div>
        <div className="flex-1 space-y-5">
          <h1 className="text-3xl font-semibold text-gray-300">{name}</h1>
          <h3 className="text-gray-300 italic">{biography}</h3>

          <div className="grid grid-cols-2 gap-3 text-gray-300">
            <div className="flex flex-col ">
              <span className="font-medium ">Birth Date </span>
              <div className="text-sm">
                {new Date(birthday).toLocaleDateString("en-US", {
                  dateStyle: "medium",
                })}
              </div>
            </div>

            <div className="flex flex-col ">
              <span className="font-medium">Place Of Birth </span>
              <div className="text-sm">{place_of_birth}</div>
            </div>
            <div className="flex flex-col ">
              <span className="font-medium">Gender </span>
              <div className="text-sm">{gender === 1 ? "Female" : "Male"}</div>
            </div>
            <div className="flex flex-col ">
              <span className="font-medium">Also Known As </span>

              <div className="text-sm">{also_known_as[0]}</div>
            </div>
          </div>
        </div>
      </div>
      <CreditCarousel {...movie_credits} />
      <CreditCarousel {...tv_credits} />
    </div>
  );
};

export default PeopleDetail;

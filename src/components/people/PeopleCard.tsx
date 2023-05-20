import {
  PLACEHOLDER_IMAGE_URL,
  TMDB_IMAGE_BASE_URL,
} from "@/constants/constants";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";

const PeopleCard = ({ id, profile_path, name }: any) => {
  const router = useRouter();
  return (
    <li
      key={id}
      onClick={() => router.push(`/people/${id}`)}
      className="border border-gray-700 cursor-pointer  bg-gray-700 rounded-md"
    >
      <div className="aspect-w-3 aspect-h-4   w-full rounded-t-md overflow-hidden bg-gray-700">
        <Image
          alt="card"
          src={
            profile_path
              ? `${TMDB_IMAGE_BASE_URL}${profile_path}`
              : PLACEHOLDER_IMAGE_URL
          }
          fill
          style={{
            objectFit: "cover",
            objectPosition: "right top",
          }}
          className={`rounded-t-md duration-700 ease-in-out`}
        />
      </div>

      <p className="text-gray-300 text-center py-2">{name}</p>
    </li>
  );
};

export default PeopleCard;

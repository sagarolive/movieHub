import React, { FC } from "react";

//Constant imports
import {
  PLACEHOLDER_IMAGE_URL,
  TMDB_IMAGE_BASE_URL,
} from "@/constants/constants";

import Image from "next/image";
import { useRouter } from "next/router";

interface CastCardProps {
  id: number;
  name: string;
  profileImage: string;
  characterName: string;
}
const CastCard: FC<CastCardProps> = ({
  characterName,
  name,
  profileImage,
  id,
}) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer bg-gray-700 rounded-md"
      onClick={() => router.push(`/people/${id}`)}
    >
      <div className="aspect-w-3 aspect-h-4   w-full rounded-t-md overflow-hidden bg-gray-700">
        <Image
          alt="card"
          src={
            profileImage
              ? `${TMDB_IMAGE_BASE_URL}${profileImage}`
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

      <div className="py-2 px-1">
        <h2 className="text-gray-300 font-medium text-center">{name}</h2>
        <h4 className="text-gray-400 text-xs text-center">{characterName}</h4>
      </div>
    </div>
  );
};

export default CastCard;

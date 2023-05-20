import { AsyncSelect } from "@/components";
import {
  PLACEHOLDER_IMAGE_URL,
  TMDB_IMAGE_BASE_URL,
} from "@/constants/constants";
import { Layout } from "@/layouts";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Search = () => {
  const router = useRouter();

  const handleDataLoadOptions = async (
    inputText: any,
    loadedOptions: any,
    { page }: any
  ) => {
    const res = await fetch(
      `/api/search?page=${page}&search=${inputText}`
    ).then((res) => res.json());
    console.log("res", res);
    return {
      options: res?.results?.map((item: any) => ({
        label: item.title || item.name,
        value: item.id,
        releaseDate: new Date(
          item.release_date || item.first_air_date
        ).toLocaleDateString("en-US", {
          dateStyle: "medium",
        }),
        type: item.media_type,
        rating: parseFloat(item.vote_average).toFixed(1),
        posterUrl: `${
          item.backdrop_path
            ? TMDB_IMAGE_BASE_URL + item.backdrop_path
            : PLACEHOLDER_IMAGE_URL
        }`,
      })),
      hasMore: res?.results?.length >= 1,
      additional: {
        page: inputText ? 2 : page + 1,
      },
    };
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2">
          <AsyncSelect
            handleChange={(property) => console.log("property", property)}
            handleLoadOptions={handleDataLoadOptions}
            placeholder="Enter Keyword"
            formatOptionLabel={(property) => {
              return (
                <div
                  className="flex items-center space-x-2"
                  onClick={() =>
                    router.push(
                      `${
                        property.type === "movie"
                          ? "movies"
                          : property.type === "tv"
                          ? "tv-shows"
                          : "people"
                      }/${property.value}`
                    )
                  }
                >
                  <Image
                    alt={property.label}
                    src={property.posterUrl}
                    width={80}
                    height={80}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                    className="rounded-full"
                  />
                  <div className="text-gray-100">
                    <span>{property.label}</span>
                    {property.type !== "person" && (
                      <div className="text-sm space-x-2">
                        <span>{property.rating}</span>
                        <span>{property.releaseDate}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Search;

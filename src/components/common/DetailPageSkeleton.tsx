import React from "react";
import { Carousel } from "react-responsive-carousel";

const DetailPageSkeleton = () => {
  return (
    <div className="  animate-pulse space-y-5 ">
      <div className="flex space-x-4 p-6 h-96 rounded-md bg-gray-800">
        <div className="hidden lg:block h-full">
          <div className="flex items-center justify-center w-64 h-full bg-gray-700 rounded  dark:bg-gray-700">
            <svg
              className="w-12 h-12 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col space-y-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <div
              className="h-2 bg-gray-700 w-full rounded-full"
              key={item}
            ></div>
          ))}
        </div>
      </div>
      <div className="space-y-3 p-2">
        <div className="h-2 bg-gray-700 w-64 rounded-full"></div>
        <Carousel
          showThumbs={false}
          centerSlidePercentage={100 / 8}
          centerMode={true}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div
              className="h-44 w-36  bg-gray-700  rounded-md "
              key={item}
            ></div>
          ))}
        </Carousel>
      </div>
      <div className="space-y-3 p-2">
        <div className="h-2 bg-gray-700 w-64 rounded-full"></div>
        <Carousel
          showThumbs={false}
          centerSlidePercentage={100 / 8}
          centerMode={true}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div
              className="h-44 w-36  bg-gray-700  rounded-md "
              key={item}
            ></div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default DetailPageSkeleton;

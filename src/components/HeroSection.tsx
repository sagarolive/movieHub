import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const CarouselItem = () => {
  return (
    <div className="h-[25em]  md:h-[32em] xl:h-[42em] 2xl:h-[50em] relative bg-cover bg-center bg-[url('https://static.bunnycdn.ru/i/cache/images/3/36/369df6edd1ace804bd5cb4ef2f785aa5.jpg')] w-full">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50">
        <div className="grid content-end h-full p-10 md:p-20 gap-y-2">
          <h3 className="text-3xl font-semibold text-gray-100">
            Shazam! Fury of the Gods
          </h3>
          <div className="text-gray-100 gap-x-4 flex text-sm">
            <span className="bg-teal-400 text-gray-700 text-xs py-[1px] px-[8px] rounded-sm flex justify-items-center items-center">
              HD
            </span>{" "}
            <span className="imdb">
              <i className="fa fa-star"></i> 6.50
            </span>
            <span>130 min</span>
            <span className="flex gap-x-4">
              <a href="/genre/comedy" title="Comedy">
                Comedy
              </a>
              <a href="/genre/adventure" title="Adventure">
                Adventure
              </a>
              <a href="/genre/action" title="Action">
                Action
              </a>
            </span>
          </div>
          <div className="text-gray-200 hidden sm:block xs:w-6/12">
            The film continues the story of teenage Billy Batson who, upon
            reciting the magic word "SHAZAM!" is transformed into his adult
            Super Hero alter ego, Shazam.
          </div>
          <div className="text-gray-200 mt-5 flex gap-x-5 text-sm">
            <a
              className="bg-black bg-opacity-40 border-teal-500 gap-x-1 text-teal-500 border py-2 px-6 rounded-full flex items-center cursor-pointer hover:bg-teal-500 hover:text-gray-800"
              href="/movie/shazam-fury-of-the-gods-wqm8o"
            >
              <BsPlayFill /> Watch now
            </a>
            <a className="cursor-pointer flex items-center gap-x-1 bg-black bg-opacity-40 border-gray-300 text-gray-300 border py-2 px-6 rounded-full hover:bg-gray-300 hover:text-gray-800">
              <AiOutlineHeart />
              Add to list
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const HeroSection = () => {
  return (
    <section>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5].map((item) => (
          <CarouselItem key={item} />
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;

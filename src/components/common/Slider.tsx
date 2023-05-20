import React, { FC, ReactNode } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ReactSlider from "react-slick";

interface ISliderProps {
  children: ReactNode;
}

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
  <button
    {...props}
    className={
      " right-10 bg-teal-500 absolute -top-7 rounded-sm p-[2px] cursor-pointer" +
      (currentSlide === 0 ? "bg-opacity-50" : "")
    }
    disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <AiOutlineArrowLeft />
  </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
  <button
    {...props}
    className={
      "absolute -top-7 right-3 bg-teal-500 rounded-sm p-[2px] cursor-pointer" +
      (currentSlide === slideCount - 1 ? "bg-opacity-50" : "")
    }
    disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <AiOutlineArrowRight />
  </button>
);

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  arrows: true,
  lazyload: true,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 5,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
  ],
};

const Slider: FC<ISliderProps> = ({ children }) => {
  return <ReactSlider {...settings}>{children}</ReactSlider>;
};

export default Slider;

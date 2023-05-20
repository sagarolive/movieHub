import { AiOutlineHeart } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";

const CarouselItem = ({
  bgImageUrl,
  title,
  quality,
  rating,
  runtime,
  genre,
  description,
  id,
}: any) => {
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${bgImageUrl})`,
      }}
      className={`h-[25em] rounded-md   md:h-[32em] xl:h-[42em] 2xl:h-[50em] relative bg-cover bg-center w-full`}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-[rgba(17,17,17,0.5)]  to-[rgba(17,17,17,1)]">
        <div className=" grid content-end h-full  px-3 py-14 md:p-20 gap-y-2">
          <h3 className="text-start text-3xl font-semibold text-gray-100">
            {title}
          </h3>
          <div className="text-gray-100 gap-x-4 flex text-sm">
            <span className="bg-teal-400 text-gray-700 text-xs py-[1px] px-[8px] rounded-sm flex justify-items-center items-center">
              {quality}
            </span>{" "}
            <span className="imdb">
              <i className="fa fa-star"></i> {rating}
            </span>
            <span>{runtime}</span>
            <span className="flex gap-x-4">
              {genre.map((item: any) => (
                <a href="/genre/comedy" title="Comedy">
                  {item}
                </a>
              ))}
            </span>
          </div>
          <div className="text-start text-gray-200 hidden sm:block xs:w-6/12">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarouselItem;

import React from "react";
import { BsFacebook, BsInstagram, BsReddit, BsTwitter } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="w-full bg-gray-950  px-4  2xl:px-72 lg:px-10 py-6 flex flex-col items-center space-y-4">
      <div className="flex flex-col space-y-4 items-center">
        <h2 className="text-teal-400 font-bold text-3xl">movieHub</h2>
        <p className="text-sm text-gray-300 max-w-3xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fuga a
          reprehenderit unde quod, consectetur aut magnam dignissimos cumque
          error nostrum nesciunt nobis soluta eligendi molestias et ipsum
          consequuntur est?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eaque fuga a reprehenderit unde quod, consectetur aut magnam
          dignissimos cumque error nostrum nesciunt nobis soluta eligendi
          molestias et ipsum consequuntur est?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eaque fuga a reprehenderit unde quod,
          consectetur aut magnam dignissimos cumque error nostrum nesciunt nobis
          soluta eligendi molestias et ipsum consequuntur est?
        </p>
      </div>

      <ul className="text-sm text-gray-400 flex  items-center space-x-3">
        <li>
          <BsFacebook
            style={{
              width: "1.4rem",
              height: "1.4rem",
            }}
          />
        </li>
        <li>
          <BsInstagram
            style={{
              width: "1.4rem",
              height: "1.4rem",
            }}
          />
        </li>
        <li>
          <BsTwitter
            style={{
              width: "1.4rem",
              height: "1.4rem",
            }}
          />
        </li>
      </ul>
    </div>
  );
};

export default Footer;

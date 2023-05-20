import React, { useState } from "react";

import { BsSearch } from "react-icons/bs";

import NavbarItem from "./NavbarItem";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  const router = useRouter();

  const menus = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Movies",
      url: "/movies",
      children: [
        {
          id: 21,
          name: "Popular",
          url: "/movies",
        },
        {
          id: 22,
          name: "Now Playing",
          url: "/movies/nowPlaying",
        },
        {
          id: 23,
          name: "Upcoming",
          url: "/movies/upcoming",
        },
        {
          id: 24,
          name: "Top Rated",
          url: "/movies/topRated",
        },
      ],
    },
    {
      id: 3,
      name: "TV Series",
      url: "/tv-shows",
      children: [
        {
          id: 31,
          name: "Popular",
          url: "/tv-shows",
        },
        {
          id: 32,
          name: "Airing Today",
          url: "/tv-shows/airingToday",
        },
        {
          id: 33,
          name: "On TV",
          url: "/tv-shows/onTv",
        },
        {
          id: 34,
          name: "Top Rated",
          url: "/tv-shows/topRated",
        },
      ],
    },
    {
      id: 4,
      name: "People",
      url: "/people",
    },
  ];

  return (
    <nav className="px-4  2xl:px-72 lg:px-10 py-4 bg-gray-950 flex gap-x-10 flex-row items-center justify-between">
      <h2 className="text-teal-400 font-bold text-3xl">movieHub</h2>

      <div className="ml-8 gap-7 hidden lg:flex w-full">
        {menus.map((menu) => (
          <NavbarItem
            children={menu.children}
            key={menu.id}
            label={menu.name}
            url={menu.url}
          />
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => router.push("/search")}
          className="border border-teal-600 rounded-full text-teal-600 w-24 flex items-center justify-center gap-x-2 py-1 px-2"
        >
          <BsSearch />
          Search
        </button>
        <RxHamburgerMenu
          onClick={toggleDrawer}
          className="lg:hidden block text-gray-300 text-2xl cursor-pointer"
        />
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          style={{
            background: "rgb(31,42,55)",
            width: "27rem",
            padding: "2rem",
          }}
        >
          <div className="flex flex-col justify-center items-center space-y-3 h-full">
            {menus.map((menu) => (
              <div
                onClick={() => router.push(menu.url)}
                className={`cursor-pointer text-xl font-semibold hover:text-teal-500 ${
                  router.pathname === menu.url
                    ? "text-teal-500"
                    : "text-gray-300"
                }`}
              >
                {menu.name}
              </div>
            ))}
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;

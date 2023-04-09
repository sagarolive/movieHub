import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  BellIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import AccountMenu from "@/components/AccountMenu";
import MobileMenu from "@/components/MobileMenu";
import NavbarItem from "@/components/NavbarItem";
import { BsSearch } from "react-icons/bs";

import useHideOnOutsideClick from "@/hooks/useHideOnOutSideClick";
import useCurrentUser from "@/hooks/useCurrentUser";
import { CustomModal, ModalContents, ModalOpenButton } from "./Modal";
import LoginForm from "./LoginForm";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showMobileSearchBox, setShowMobileSearchBox] = useState(false);
  const { data: currentUser } = useCurrentUser();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  useHideOnOutsideClick(dropdownRef, () => {
    setShowAccountMenu(false);
  });

  useHideOnOutsideClick(searchBoxRef, () => {
    setShowMobileSearchBox(false);
  });
  const toggleMobileSearchBox = useCallback(() => {
    setShowMobileSearchBox((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full absolute top-0 z-20">
      <div className="px-4 md:px-20 py-6 flex gap-x-10 flex-row items-center">
        <h2 className="text-teal-400 font-bold text-3xl">movieHub</h2>
        <div className="flex-row ml-8 gap-7 hidden xl:flex">
          <NavbarItem label="Home" active />
          <NavbarItem label="Genre" />
          <NavbarItem label="Country" />
          <NavbarItem label="Top Imdb" />
        </div>
        <div className="relative hidden  group md:flex md:flex-grow">
          <input
            type="text"
            placeholder="Enter your keywords"
            className="px-10  sm:w-3/4 md:w-full 2xl:w-3/6 rounded-full py-3 bg-gray-300 bg-opacity-30 border-none focus:outline-none group-focus:bg-opacity-70 group-hover:bg-opacity-70 group-focus:placeholder-gray-800 group-hover:placeholder-gray-800"
          />
          <BsSearch className="absolute top-[17px] left-3 text-gray-300 group-hover:text-gray-800" />
        </div>
        {currentUser ? (
          <div
            ref={dropdownRef}
            className="relative flex cursor-pointer flex-grow justify-end md:flex-grow-0"
          >
            <div
              onClick={toggleAccountMenu}
              className="w-8 h-8 rounded-full bg-white "
            >
              <img
                className="inline-block  rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <AccountMenu visible={showAccountMenu} />
          </div>
        ) : (
          <div className="flex items-center gap-x-3 flex-grow justify-end md:flex-grow-0">
            <div className="relative md:hidden">
              <div
                ref={searchBoxRef}
                className="absolute -right-10 top-10  group md:flex md:flex-grow "
              >
                {showMobileSearchBox && (
                  <>
                    <input
                      type="text"
                      placeholder="Enter your keywords"
                      className="px-10 w-96 rounded-full py-3 bg-gray-200 border-none focus:outline-none placeholder-gray-800"
                    />
                    <BsSearch className="absolute top-[17px] left-3 text-gray-800" />
                  </>
                )}
              </div>
              <BsSearch
                className="text-2xl cursor-pointer text-gray-300 group-hover:text-gray-800"
                onClick={toggleMobileSearchBox}
              />
            </div>
            <CustomModal>
              <ModalOpenButton>
                <button className="text-gray-800 cursor-pointer bg-teal-400 px-4 py-2 rounded-full hover:bg-teal-600">
                  Login
                </button>
              </ModalOpenButton>
              <ModalContents title="Login">
                <LoginForm />
              </ModalContents>
            </CustomModal>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import React, { useState } from "react";
import {
  XMarkIcon,
  Bars3Icon,
  Logo,
  FiTwitter,
  FiYoutube,
  FiGithub,
  FiLinkedin,
  FaDev,
} from "./ui/icons";

import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import { roboto400, roboto700 } from "@/fonts";

import { useScrollPosition } from "@/hooks/useScrollPosition";

const items = [
  { path: "home", name: "Home" },
  { path: "about", name: "About" },
  { path: "portfolio", name: "Portfolio" },
  { path: "contact", name: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50  px-4 py-4 transition-shadow  ${
          scrollPosition > 0 ? "bg-white shadow " : "bg-white shadow-none"
        }`}
      >
        <div className="mx-auto max-w-3xl md:max-w-5xl ">
          <div className="flex flex-row  items-center justify-between ">
            <button onClick={handleScrollToTop}>
              <Logo />
            </button>

            <div className="hidden sm:flex sm:flex-row sm:space-x-4">
              {items.map((item, idx) => (
                <ScrollLink
                  key={idx}
                  activeClass="active"
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={handleClose}
                  className={`${roboto400.className} text-lg hover:cursor-pointer`}
                  activeStyle={{
                    color: "#7e22ce",
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>

            <div className="flex  sm:hidden" onClick={handleToggle}>
              <Bars3Icon className="h-8 w-8" />
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-100 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 sm:hidden" onClick={handleToggle}>
          <XMarkIcon className="h-8 w-8 text-white" />
        </div>
        <div className="flex h-80 flex-1 items-center justify-center text-center">
          <div className="flex flex-col items-center space-y-6">
            {items.map((item, idx) => (
              <ScrollLink
                key={idx}
                activeClass="active"
                to={item.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
                className={`${roboto700.className} cursor-pointer text-4xl text-white`}
                activeStyle={{ color: "#7e22ce" }}
              >
                {item.name}
              </ScrollLink>
            ))}
            <div className="flex flex-row space-x-4">
              <Link href="https://twitter.com/hqasmei" target="_blank">
                <FiTwitter color="white" size={25} />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCQBMkSDgbxDb8usMeXmOZyA"
                target="_blank"
              >
                <FiYoutube color="white" size={25} />
              </Link>
              <Link href="https://github.com/hqasmei" target="_blank">
                <FiGithub color="white" size={25} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/hosnaqasmei/"
                target="_blank"
              >
                <FiLinkedin size={25} color="white" />
              </Link>
              <Link href="https://dev.to/hqasmei" target="_blank">
                <FaDev size={25} color="white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

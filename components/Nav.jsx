import React, { useState } from "react";
import WidgetsTwoToneIcon from "@mui/icons-material/WidgetsTwoTone";
import CloseFullscreenTwoToneIcon from "@mui/icons-material/CloseFullscreenTwoTone";
import { Link } from 'react-scroll'

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
      document.body.style.overflowX = "hidden";
    }
  };
  return (
    <nav className="sm:px-8 sm:py-4 px-4 py-2 flex items-center justify-between gap-2 sticky top-0 z-[10] bg-transparent/40">
      {/* Logo and company name */}
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        <img className="h-10 w-10 rounded-full" src="/Logo.png" alt="logo" />
        <h1 className="font-bold text-Primary-Color text-md sm:text-xl">
          KANAKA DURGA CONSULTANCY SERVICES{" "}
        </h1>
      </div>
      {/* <h1 className='text-Primary-Color hidden sm:block font-semibold text-2xl'><span className='font-semibold text-xl'>+91</span> 123456789</h1> */}
      <ul className="hidden sm:flex text-Primary-Color items-center justify-center gap-5">
        <a href="#home">
          <li className="font-semibold text-xl link link-underline link-underline-black cursor-pointer">
            Home
          </li>
        </a>
        
        <Link to="services" smooth={true} duration={500}>
          <li className="font-semibold text-xl link link-underline link-underline-black cursor-pointer">
            Services
          </li>
        </Link>
        <Link to="about" smooth={true} duration={750}>
          <li className="font-semibold text-xl link link-underline link-underline-black cursor-pointer">
            About
          </li>
        </Link>
        {/* <a href="#projects">
          <li className="font-semibold text-xl link link-underline link-underline-black cursor-pointer scroll-m-1">
            Projects
          </li>
        </a> */}
        <Link to="projects" smooth={true} duration={1000}>
        <li className="font-semibold text-xl link link-underline link-underline-black cursor-pointer">
            Projects
          </li>
        </Link>
        <Link to="contact" smooth={true} duration={1500}>
          <li className="font-semibold text-xl link link-underline link-underline-black cursor-pointer">
            Contact
          </li>
        </Link>
      </ul>
      <div
        className="text-Primary-Color block sm:hidden cursor-pointer z-[11]"
        onClick={handleNav}
      >
        {!nav ? (
          <WidgetsTwoToneIcon fontSize="large" />
        ) : (
          <CloseFullscreenTwoToneIcon fontSize="large" />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 z-10 text-gray-300 w-full h-screen bg-black/90 px-4 py-7 flex-col ease-out duration-700"
            : "absolute z-10 top-0 left-[-100%] duration-1000 ease-in h-screen"
        }
      >
        <ul className="flex flex-col items-center justify-center w-full h-full">
          <li className="font-bold text-2xl p-4">Home</li>
          <li className="font-bold text-2xl p-4">Services</li>
          <li className="font-bold text-2xl p-4">About</li>
          <li className="font-bold text-2xl p-4">Projects</li>
          <li className="font-bold text-2xl p-8">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

"use client";
import { useState } from "react";
import "./Hamburger.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  function toggleActive() {
    setIsActive(!isActive);
  }

  return (
    <>
      <div className="text-gray-50 w-full p-4 md:p-6 flex justify-between items-center bg-gradient-to-b from-black">
        <div className="flex md:mx-12 items-center gap-2">
          <a href="#" className="logo">
            <img
              className="w-4/5 md:w-full"
              src="/gdsc-logo.svg"
              alt="gdsc-logo"
            />
          </a>
          <h1 className="hidden md:block font-bold">GDSC-TCET</h1>
        </div>
        <ul className="hidden list-none gap-12 my-4 md:mx-12 text-md text-gray-400 md:flex items-center justify-between">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
        </ul>
        <div
          className={`menu-btn-1 md:hidden mx-6 z-20 ${
            isActive ? "active" : ""
          }`}
          onClick={toggleActive}
        >
          <span></span>
        </div>
      </div>
      {isActive && <HamBurger />}
    </>
  );
};

export default Header;

const HamBurger = () => {
  return (
    <>
      <div className="absolute mt-2 rounded-lg border border-gray-50/20 z-10 bg-gray-950/90 drop-shadow-2xl backdrop-filter backdrop-blur-[6px] w-[96%] p-2">
        <ul className="list-none gap-12 my-4 text-xs flex flex-col items-center justify-between">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
        </ul>
      </div>
    </>
  );
};

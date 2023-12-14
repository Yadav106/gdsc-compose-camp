"use client";
import "./Hero.css";
import { useState } from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      {/* Gradients */}
      <div className="absolute w-full -z-10 -top-32 max-sm:-top-11 mx-auto max-md:-top-10">
        <img src="/Ellipse 4.png" className="-z-10  mx-auto" alt="" />
      </div>
      <div className="justify-between">
        <div className="gradient-l absolute -z-20 max-sm:-left-44"></div>
        <div className="gradient-r absolute -z-20 max-sm:-right-48 "></div>
      </div>

      {/* Header */}
      <div className="justify-center content-center items-center px-3 mt-20">
        <div className=" text-6xl max-sm:text-3xl max-md:text-4xl text-center mx-auto font-bold leading-snug w-9/12">
          Elevate Your App Design Journey with{" "}
          <span className="textgrad text-center">Jetpack Compose </span>
        </div>
        <div className="text-gray-500 mx-auto text-center max-md:text-base w-7/12 mt-2 max-sm:text-sm max-sm:w-full">
          Android's modern UI toolkit, alongside peers at Compose Camp.
        </div>
        <div>
          <img
            src="/android.png"
            alt=""
            className="mx-auto mt-4 transform ease-in-out duration-200"
          />
          <div className="px-4 py-2 font-semibold bg-white rounded-full text-gray-900 text-center w-fit mx-auto cursor-pointer hover:bg-gray-900 transition-all ease-in hover:text-white">
            <a href="https://developer.android.com/compose-camp">Get Started</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

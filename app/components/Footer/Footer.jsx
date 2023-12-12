import React from "react";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 p-4 mt-8 border-t border-t-gray-700 w-full max-md:grid-cols-1">
        <div className="p-4">
          <img src="/gdsc-logo.svg" height={75} width={75} alt="" />
          <div className="mt-2 font-semibold">GDSC-TCET</div>
          <div className="text-sm text-gray-500">
            Dive into our collection of Jetpack Compose projects on GitHub.
            Contribute, learn, and collaborate with fellow Compose
            enthusiasts.🚀✨
          </div>
        </div>
        <div className="p-4 text-center">
          <div className="font-semibold pb-2 border-b border-b-gray-700 text-center mx-14">
            Quick Links
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <a href="https://gdsc.community.dev/thakur-college-of-engineering-and-technology/">
              Community Page
            </a>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            <a href="https://gdsc.community.dev/thakur-college-of-engineering-and-technology/">
              GDSC TCET
            </a>
          </div>
        </div>
        <div className="p-4 mx-auto">
          <div className="font-semibold mb-4 pb-2 border-b border-b-gray-700 text-center ">
            {" "}
            Socials
          </div>
          <div className="grid grid-cols-2 gap-2 p-1 w-full max-sm:grid-cols-4 max-sm:">
            <div className="p-1">
              <img src="/instagram.png" alt="" />
            </div>
            <div className="p-1">
              <img src="/github.png" alt="" />
            </div>
            <div className="p-1">
              <img src="/linkedin.png" alt="" />
            </div>
            <div className="p-1">
              <img src="/discord.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-t-gray-900 w-full">
        <div className="text-center text-gray-500 text-sm p-4 ">
          Copyright © GDSC TCET 2023
        </div>
      </div>
    </>
  );
};

export default Footer;

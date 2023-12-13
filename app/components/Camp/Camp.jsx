import React from "react";

const Camp = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between bg-gradient-to-r from-gray-950 via-gray-500 to-gray-950 h-fit p-[1px] mt-20 lg:mt-48">
        <div className="h-fit w-full bg-gradient-to-b from-gray-950 to-[#0f011d] items-center justify-between px-2 py-6">
          <div className="text-2xl mx-auto text-center font-semibold max-sm:text-lg">
            Why did developers Participate in Compose Camp?
          </div>
          <div className="imgrid grid grid-cols-3 gap-1 px-24 m-4 max-[960px]:grid-cols-1 max-md:px-1 max-sm:m-1">
            <div className=" p-0">
              <img src="/im2.png" alt="" className="mx-auto" />
              <div className="text-2xl font-semibold text-center m-1 max-sm:text-base ">
                Learn The Latest Practices
              </div>
              <div className="text-md text-gray-400 leading-snug text-center mx-10 max-sm:mx-1 max-sm:text-sm">
                Whether you`re a beginner or ready to master Jetpack Compose,
                learn about the latest development tools and APIs to build
                better Android apps.
              </div>
            </div>
            <div className=" p-0">
              <img src="/im1.png" alt="" className="mx-auto" />
              <div className="text-2xl font-semibold text-center m-1 max-sm:text-base">
                Apply your skills{" "}
              </div>
              <div className="text-md text-gray-400 leading-snug text-center mx-10 max-sm:mx-1 max-sm:text-sm">
                Tackle hands-on activities and learn development concepts that
                you can apply directly in your own projects.
              </div>
            </div>
            <div className=" p-0">
              <img src="/im3.png" alt="" className="mx-auto" />
              <div className="text-2xl font-semibold text-center m-1 max-sm:text-base">
                Connect with other developers{" "}
              </div>
              <div className="text-md text-gray-400 leading-snug text-center mx-10 max-sm:mx-1 max-sm:text-sm">
                Compose Camp participants had an opportunity to meet other
                developers in the community as they advanced their skills,
                learned from each other, and built their networks.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Camp;

import { useState } from "react";

export const ReviewCard = (props) => {
  return (
    <div className="grid grid-cols-4 p-6 my-8 md:my-16 transition ease-in-out bg-gray-200 border-b-[5px] border-r-[5px] rounded-xl max-h-72 hover:-translate-y-1 hover:-translate-x-1 hover:border-red-600 hover:max-h-full">
      {/*user info*/}
      <div className="flex flex-col max-h-full pr-6 font-semibold border-2 sm:justify-center border-r-gray-500 sm:text-2xl">
        <div className="flex justify-center animate-pulse">
          <img
            src="https://via.placeholder.com/150?text=+"
            width="120"
            height="auto"
            className="rounded-full"
          />
        </div>
        <h1 className="mt-5 overflow-hidden text-sm break-words sm:text-lg">
          User
        </h1>
        <h2 className="overflow-hidden text-sm font-medium break-words sm:text-md">
          01-01-2022
        </h2>
        <div className="text-sm font-thin">Review ID: {props.id}</div>
      </div>

      {/*review content*/}
      <div className="relative col-span-3 group/text">
        {/*fade-out effect for overflowing text*/}
        <div className="absolute bottom-0 w-full h-1/6 bg-gradient-to-t from-gray-200 to-transparent group-hover/text:invisible">
          <br />
        </div>
        <p className="ml-6 overflow-hidden text-sm break-words max-h-60 group-hover/text:max-h-full sm:text-lg">
          {" "}
          Lorem ipsum dolor sit
          ametmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exer rem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exer
        </p>
      </div>
    </div>
  );
};

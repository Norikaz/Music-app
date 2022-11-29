import React from "react";
import { ReviewCard } from "./UI/ReviewCard";

export const ReviewContainer = (props) => {
  return (
    <div className="bg-gray-100 mx-auto my-6 rounded-xl max-w-[95%] w-30 p-16 font-inter">
      <h1 className="w-full mb-16 text-3xl font-semibold text-left sm:text-4xl">
        Reviews
      </h1>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  );
};

import React, { useState } from "react";
import { ReviewCard } from "./UI/ReviewCard";
import { ReviewInputBox } from "./UI/ReviewInputBox";
import { Paging } from "./layout/Paging";

export const ReviewContainer = (props) => {
  const [reviewsPerPage] = useState(10);

  // temporary for testing
  let reviewCards = [];
  for (let i = 0; i < 50; i++) {
    reviewCards.push(<ReviewCard id={i + 1} />);
  }

  return (
    <div className="bg-gray-100 mx-auto my-6 rounded-xl max-w-[95%] w-30 p-6 sm:p-16 font-inter">
      <h1 className="w-full mb-16 text-3xl font-semibold text-left sm:text-4xl">
        Reviews
      </h1>
      <ReviewInputBox />
      <Paging objectArray={reviewCards} itemsPerPage={reviewsPerPage} />
    </div>
  );
};

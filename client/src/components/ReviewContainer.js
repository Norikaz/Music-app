import React, { useState } from "react";
import { ReviewCard } from "./UI/ReviewCard";
import { ReviewInputBox } from "./UI/ReviewInputBox";

export const ReviewContainer = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage, setReviewsPerPage] = useState(10);

  // temporary for testing
  let reviewCards = [];
  for (let i = 0; i < 50; i++) {
    reviewCards.push(<ReviewCard id={i + 1} />);
  }

  // Separates the reviewCards into pages
  const displayReviews = () => {
    return reviewCards.slice(
      (currentPage - 1) * reviewsPerPage,
      (currentPage - 1) * reviewsPerPage + reviewsPerPage
    );
  };

  // Displays and changes the page number
  const displayPageNumbers = () => {
    return reviewCards
      .slice(0, Math.ceil(reviewCards.length / reviewsPerPage))
      .map((card, i) => (
        <button
          onClick={() => {
            setCurrentPage(i + 1);
          }}
        >
          <span
            id={i + 1}
            className={`mx-2 ${i + 1 === currentPage ? "font-bold" : ""}`}
          >
            {i + 1}
          </span>
        </button>
      ));
  };

  return (
    <div className="bg-gray-100 mx-auto my-6 rounded-xl max-w-[95%] w-30 p-6 sm:p-16 font-inter">
      <h1 className="w-full mb-16 text-3xl font-semibold text-left sm:text-4xl">
        Reviews
      </h1>
      <ReviewInputBox />
      {displayReviews()}
      <div className="inline-flex justify-center w-full overflow-scroll">
        {displayPageNumbers()}
      </div>
    </div>
  );
};

import { authenticate } from "passport";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export const ReviewInputBox = () => {
  const [reviewContent, setReviewContent] = useState("");
  const auth = useAuth()
  const [isLoggedIn, setisLoggedIn] = useState(auth.isAuthenticated);
  const [reviewSection, setReviewSection] = useState("");
  const charLimit = 1000;

  useEffect(() => {
    setisLoggedIn(auth.isAuthenticated)
  }, [auth.isAuthenticated])

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(reviewContent);
  };

  return (
    !isLoggedIn ? <p>Login to leave a review!</p> : 
    <div>
      <form onSubmit={handleSubmit}>
        {" "}
        <label
          for="message"
          class="flex justify-left ml-1 mb-2 text-lg font-semibold text-gray-900 dark:text-white"
        >
          Leave a review
        </label>
        <textarea
          id="message"
          maxLength={charLimit}
          class="block h-64 resize-none p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your thoughts"
          onChange={(event) => setReviewContent(event.target.value)}
        ></textarea>
        <div class="inline-flex items-center justify-end w-full">
          <span className="pt-2 mr-5">
            {reviewContent.length} / {charLimit}
          </span>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 "
          >
            Post Review
          </button>
        </div>
      </form>
    </div>
  );
};

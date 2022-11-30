// Displays information on average, user, and relevancy scores
export const ScoreCard = (props) => {
  const starSVG = () => {
    return (
      <svg
        aria-hidden="true"
        className="inline-block w-6 h-6 mb-1 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    );
  };

  return (
    <div className="grid items-center grid-flow-col grid-cols-3 col-span-2 bg-gray-200 outline outline-2 outline-gray-300 rounded-xl">
      <div className="mr-2">
        <h2 className="font-semibold sm:text-2xl text-l mb-11">
          Average Score
        </h2>
        <p className="sm:text-xl text-l">9.99 {starSVG()}</p>
      </div>

      <div className="md:border-2 lg:border-0 xl:border-2 border-x-gray-500">
        <h2 className="font-semibold sm:text-2xl text-l mb-11">Your Score</h2>
        <div className="sm:text-xl text-l">
          <button
            className="sm:scale-100 sm:mx-2 scale-[0.75] mx-[0.2rem] bg-gray-100 hover:bg-gray-300 active:bg-gray-400 active:scale-[0.85] active:text-l outline outline-1 outline-gray-300 px-[0.6rem] rounded-lg"
            onClick={props.handleRatingDecrease}
          >
            -
          </button>
          {props.userRating}
          <button
            className="sm:scale-100 sm:mx-2 scale-[0.75] mx-[0.2rem] bg-gray-100 hover:bg-gray-300 active:bg-gray-400 active:scale-[0.85] active:text-l outline outline-1 outline-gray-300 px-2 rounded-lg"
            onClick={props.handleRatingIncrease}
          >
            +
          </button>
          {starSVG()}
        </div>
      </div>

      <div className="ml-2">
        <h2 className="font-semibold sm:text-2xl text-l mb-11">
          Relevance Score
        </h2>
        <p className="sm:text-xl text-l">{props.relevance}</p>
      </div>
    </div>
  );
};

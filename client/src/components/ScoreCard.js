export const ScoreCard = (props) => {
  return (
    <div className="grid items-center grid-flow-col grid-cols-3 col-span-2 bg-gray-200 outline outline-2 outline-gray-300 rounded-xl">
      <div className="mr-2">
        <h2 className="font-semibold sm:text-2xl text-l mb-11">
          Average Score
        </h2>
        <p className="sm:text-xl text-l">
          9.99 <span className="text-2xl">★</span>
        </p>
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
          <span className="text-2xl">★</span>
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

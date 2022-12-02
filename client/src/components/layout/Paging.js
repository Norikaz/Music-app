import { useState } from "react";

export const Paging = ({
  objectArray, // Array of objects to paginated
  itemsPerPage, // Number of items to display per page
  pageStyling, // String of Tailwindcss styling to apply to the page
  pageNumStyling, // String of Tailwindcss styling to apply to the page numbers
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPageState] = useState(itemsPerPage);

  // Separates the array of items into pages
  const displayItems = () => {
    return objectArray.slice(
      (currentPage - 1) * itemsPerPageState,
      (currentPage - 1) * itemsPerPageState + itemsPerPageState
    );
  };

  // Displays and changes the page number
  const displayPageNumbers = () => {
    return objectArray
      .slice(0, Math.ceil(objectArray.length / itemsPerPageState))
      .map((item, i) => (
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
    <div>
      <div className={pageStyling}>{displayItems()}</div>
      <div
        className={
          pageNumStyling
            ? pageNumStyling
            : `inline-flex justify-center w-full overflow-scroll my-10`
        }
      >
        {displayPageNumbers()}
      </div>
    </div>
  );
};

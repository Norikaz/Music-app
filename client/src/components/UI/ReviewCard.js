export const ReviewCard = (props) => {
  return (
    <div className="grid grid-cols-4 p-6 my-16 transition ease-in-out bg-gray-200 border-b-4 border-r-4 outline outline-2 outline-gray-300 rounded-xl max-h-72 hover:-translate-y-1 hover:-translate-x-1 hover:border-red-600 hover:max-h-full">
      {/*user info*/}
      <div className="flex flex-col justify-center max-h-full font-semibold border-2 border-r-gray-500 sm:text-2xl text-l">
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/150?text=No+Image"
            width="120"
            height="auto"
            className="rounded-full"
          />
        </div>
        <h1 className="mt-5 overflow-hidden break-words">User</h1>
      </div>

      {/*review content*/}
      <div className="col-span-3 mx-12 overflow-hidden break-words transition ease-in-out max-h-60 hover:max-h-full">
        {" "}
        Lorem ipsum dolor sit
        ametmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  );
};

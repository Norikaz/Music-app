import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickMenuHandler = (event) => {
    console.log("clicked");
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-300 p-6 md:flex md:items-center md:justify-between font-bold">
      <div className="flex justify-between items-center">
        <Link className="text-2xl" to="/">
          Music-App
        </Link>
        <span className="text-3xl cursor-pointer md:hidden block mx-2">
          <ion-icon
            name={isOpen ? "close" : "menu"}
            onClick={onClickMenuHandler}
          ></ion-icon>
        </span>
      </div>

      <ul
        className={`md:container md:flex md:items-center md:gap-8 justify-end z[-1] md:z-auto md:static absolute bg-gray-300 w-full left-0 md:w-auto md:py-0 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ${
          isOpen && `top-[80px] opacity-100`
        }`}
      >
        <li className="my-4 md:my-0">
          <NavLink className="" to="/posts/new">
            Home
          </NavLink>
        </li>
        <li className="my-4 md:my-0 w-20">
          <NavLink className="" to="/about-us">
            About us
          </NavLink>
        </li>
        <li className="my-4 md:my-0">
          <NavLink className="" to="/about-us">
            Contact
          </NavLink>
        </li>
        <li className="bg-blue-300 md:ml-20 p-3 rounded-full inline-block">
          <button className="">Users</button>
        </li>
      </ul>
    </nav>
  );
};

// export const Header = (props) => {
//   return (
//     <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           Music-App
//         </Link>
//         <ul className="navbar-nav me-auto">
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/posts/new">
//               Create a Micro Post
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/about-us">
//               About Us
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthButton from "../AuthButton";

export const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickMenuHandler = (event) => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="p-6 font-bold bg-gray-300 md:flex md:items-center md:justify-between">
      <div className="flex items-center justify-between">
        <Link className="text-2xl" to="/">
          Music-App
        </Link>
        <span className="block mx-2 text-3xl cursor-pointer md:hidden">
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
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="my-4 md:my-0">
          <NavLink className="" to="/posts/new">
            News
          </NavLink>
        </li>
        <li className="w-20 my-4 md:my-0">
          <NavLink className="" to="/about-us">
            About us
          </NavLink>
        </li>
        <li className="my-4 md:my-0">
          <NavLink className="" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <AuthButton/>
        </li>
      </ul>
    </nav>
  );
};

// export const Header = (props) => {
//   return (
//     <nav className="mb-3 shadow navbar navbar-expand-sm navbar-dark bg-dark">
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

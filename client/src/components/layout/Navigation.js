import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavBarItem } from "../UI/NavBarItem";
import AuthButton from "../AuthButton";

export const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickMenuHandler = (event) => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="inline-flex items-center justify-between w-full font-bold bg-white md:flex drop-shadow">
      <Link className="text-2xl" to="/">
        <div className="p-4 transition ease-in-out hover:bg-green-300 w-min">
          MusChart
        </div>
      </Link>

      <span className="z-50 inline-flex items-center mx-2 text-3xl cursor-pointer md:hidden">
        <span className="mr-6 text-sm">
          <AuthButton />
        </span>
        <ion-icon
          name={isOpen ? "close" : "menu"}
          onClick={onClickMenuHandler}
        ></ion-icon>
      </span>

      <ul
        className={`md:container md:flex md:items-center bg-white w-full justify-end z-10 md:z-0 md:static absolute first-letter:w-full left-0 md:w-auto md:py-0 md:pl-0 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ${
          isOpen && `top-[80px] opacity-100`
        }`}
      >
        <NavLink to="/">
          <NavBarItem text="Home" />
        </NavLink>
        <NavLink to="/posts">
          <NavBarItem text="News" />
        </NavLink>
        <NavLink to="/about-us">
          <NavBarItem text="About Us" />
        </NavLink>

        <li className="hidden py-5 mr-6 lg:block">
          <AuthButton />
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

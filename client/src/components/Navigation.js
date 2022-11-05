import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav className="">
      <div className="">
        <Link className="" to="/">
          Music-App
        </Link>
      </div>
      <ul className="">
        <li className="nav-item">
          <NavLink className="nav-link" to="/posts/new">
            Genres
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about-us">
            Artist
          </NavLink>
        </li>
      </ul>
      <button className="">Users</button>
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

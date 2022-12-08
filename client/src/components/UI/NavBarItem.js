import { NavLink } from "react-router-dom";

export const NavBarItem = ({ text }) => {
  return (
    <div className="relative overflow-hidden group/item">
      <div className="relative px-4 py-5 transition-all md:px-4 md:my-0">
        {text}
      </div>
      <div className="right-[800px] md:left-0 bottom-0 md:top-[80px] z-[-1] absolute w-full h-full bg-green-300 md:group-hover/item:top-[0] group-hover/item:right-[0px] transition-all ease-in-out duration-200">
        <br />
      </div>
    </div>
  );
};

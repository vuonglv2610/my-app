import React from "react";
import navbarConfig from "../configs/navbarConfig.ts";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const history = useLocation();
  console.log("history", history);

  return (
    <div className="w-[300px] h-screen flex items-center flex-col p-[40px] bg-menu">
      <div className="flex flex-col h-[85vh] gap-[120px]">
        <div className="text-[2.5rem]">
          <Link to="#">
            LOGO<span>.</span>
          </Link>
        </div>
        <ul>
          {navbarConfig.map((item, i) => {
            return (
              <li
                key={item.title}
                className={`${
                  item.href === history.pathname && "active-menu"
                } pb-2 mb-2 text-[16px] font-bold text-black`}
              >
                <Link
                  className={`${
                    item.href === history.pathname && "[&]:opacity-[100%]"
                  } menu-hover inline-block w-fit opacity-[40%] h-[26px]`}
                  to={item.href}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex-1">Footer</div>
    </div>
  );
};

export default Navbar;

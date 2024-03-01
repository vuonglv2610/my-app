import React from "react";
import navbarConfig from "../configs/navbarConfig.ts";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-[300px] h-screen flex items-center flex-col p-[40px] bg-menu">
      <div>LOGO</div>
      <ul>
        {navbarConfig.map((item) => {
          return (
            <li key={item.href}>
              <Link to={item.href}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <div>Footer</div>
    </div>
  );
};

export default Navbar;

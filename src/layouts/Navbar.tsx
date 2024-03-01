import React from "react";
import navbarConfig from "../configs/navbarConfig.ts";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      {navbarConfig.map((item) => {
        return (
          <li key={item.href}>
            <Link to={item.title}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;

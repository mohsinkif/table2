// Navigation.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  // Get the current location
  const location = useLocation();

  return (
    <nav>
      <ul className="flex gap-4 justify-center items-center">
        <li className="p-2">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/table"
            className={location.pathname === "/table" ? "active" : ""}
          >
            Table
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

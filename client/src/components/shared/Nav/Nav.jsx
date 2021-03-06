import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          Spoon Blog
        </NavLink>
        <div className="links">
          <NavLink className="link" to="/createpost">
            Add Post
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

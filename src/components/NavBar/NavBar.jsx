import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  let nav = (
    <div className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/index">
        <img
          className="navLogo"
          src="https://i.imgur.com/1C0Ijlk.png"
          alt="DancersHub Logo"
        />
      </Link>
      <div className="justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="navLink" to="/whoswho">
              who's who
            </Link>
          </li>
          <li className="nav-item">
            <Link className="navLink" to="/news">
              news
            </Link>
          </li>
          <li className="nav-item">
            <Link className="navLink" to="/">
              log out
            </Link>
          </li>
          <li className="nav-item">
            <Link className="navLink" to="/profile">
              profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
  return <div>{nav}</div>;
};

export default NavBar;

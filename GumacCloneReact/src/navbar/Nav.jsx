import styles from "./Nav.module.css";
import React from "react";
import { getImageUrl } from "../utils";

const Nav = () => {
  return (
    <nav>
      <div className="navbar">
        
          <a className="logo" href="/home">
            <img
              src={getImageUrl("navbar/header_logo.svg")}
              alt="header_logo"
            />
          </a>
        

        <div className="search_box">
          <input type="text" placeholder="Search product" />
          <button>
            <img
              src={getImageUrl("navbar/search_icon.svg")}
              alt="search_icon"
            />
          </button>
        </div>
        <ul className="links">
          <li>
            <a href="/collection">Collection</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
          <li>
            <a href="/New">New</a>
          </li>
        </ul>

        <a className="client_info" href="/client">
          <img src={getImageUrl("navbar/user_icon.svg")} alt="user_icon" />
        </a>
        <div className="toggle_btn">
          <img src={getImageUrl("navbar/toggle_btn.svg")} alt="toggle_btn" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

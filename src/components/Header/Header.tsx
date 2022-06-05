import React from "react";
import "./Header.css";
import Burger from "../Img/Burger.svg";
import Search from "../Img/Search .svg";

type HeaderProps = {
  className?: string;
  image?: string;
};

export const Header = (props: HeaderProps) => {
  return (
    <div className="Header__container">
      <div className="Burger__container">
        <button className="burger Header__btn">
          <img src={Burger} alt="burger" />
        </button>

        <div className="dropdown-content">
        <a href="#">Home</a>
        <a href="#">Add Post</a>
        </div>


      </div>
      <div className="Search__container">
        <button className="search Header__btn">
          <img src={Search} alt="search" />
        </button>
        <div className="UserName">
          <span className="UserName__abbr">AM</span>
          <span className="UserName__name">Artem Malkin</span>
        </div>

      </div>
    </div>
  );
};


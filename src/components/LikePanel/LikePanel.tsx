import React from "react";
import "./LikePanel.css";
import Dislike from "../Img/Dislike.svg";
import Like from "../Img/Like.svg";
import Bookmark from "../Img/Bookmark.svg";
import Menu from "../Img/Menu.svg";

type LikesProps = {
  className?: string;
 };

export const LikePanel = (props: LikesProps) => {
  return (
    <div className="Likes__div">
      <div className="left">
        <button className="Like__btn">
          <img src={Like} alt="" />{" "}
        </button>
        <button className="Dislike__btn">
          <img src={Dislike} alt="" />
        </button>
      </div>
      <div className="right">
        <button className="Btn__bookmark">
          <img src={Bookmark} alt="" />
        </button>
        <button className="Btn__menu">
          <img src={Menu} alt="" />
        </button>
      </div>
    </div>
  );
};

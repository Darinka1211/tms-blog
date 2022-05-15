import React from "react";
import { Date } from "../Date/Date";
import { Title } from "../Title/Title";
import { Picture } from "../Picture/Picture";
import Astronaut_2 from "../Img/Astronaut_2.png";
import { LikePanel } from "../LikePanel/LikePanel";
import "./PostCardMini.css";

type PostCardMiniProps = {
  className?: string;
  image?: string;
};

export const PostCardMini = (props: PostCardMiniProps) => {
  return (
    <div className="PostCardMini__container">
      <div className="PostCardMini__container__main">
        <div className="PicturePostCard">
          <Picture img={Astronaut_2} />
        </div>

        <div className="PostCardMini__text">
          <Date text={"April 20, 2021"} />
          <Title
            className="Title__PostCardMini"
            text={
              "Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
            }
          />
        </div>
      </div>
      <LikePanel />
    </div>
  );
};

import React from "react";
import { Date } from "../Date/Date";
import { Title } from "../Title/Title";
import { Picture } from "../Picture/Picture";
import Astronaut_3 from "../Img/Astronaut_3.png";
import "./PostCardMicro.css";
import { LikePanel } from "../LikePanel/LikePanel";

type PostCardMicroProps = {
  className?: string;
  image?: string;
};

export const PostCardMicro = (props: PostCardMicroProps) => {
  return (
    <div className="PostCardMicro__container">
      <div className="PostCardMicro__container__main">
        <div className="PostCardMicro__text">
          <Date text={"April 20, 2021"} />
          <Title
            className="Title__PostCardMicro"
            text={
              "Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
            }
          />
        </div>
        <div className="PicturePostCardMicro">
          <Picture img={Astronaut_3} />
        </div>
      </div>
      <LikePanel />
    </div>
  );
};

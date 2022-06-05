import React from "react";
import { Date } from "../Date/Date";
import { Article } from "../Article/Article";
import { Title } from "../Title/Title";
import { Picture } from "../Picture/Picture";
import Astronaut from "../Img/Astronaut.png";
import "./PostCard.css";
import { LikePanel } from "../LikePanel/LikePanel";

type PostCardProps = {
  className?: string;
  image?: string;
};

export const PostCard = (props: PostCardProps) => {
  return (
    <div className="PostCard__container">
      <div className="PostCard__container__main">
        <div className="PostCard__text">
          <Date text={"April 20, 2021"} />
          <Title
            className="Title__PostCard"
            text={
              "Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
            }
          />
          <Article
            text={
              "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight. "
            }
          />
        </div>
        <div className="PicturePostCard">
          <Picture img={Astronaut} />
        </div>
      </div>
      <LikePanel />
    </div>
  );
};

import React from "react";
import "./Picture.css";

type PictureProps = {
  className?: string;
  img?: any;
};

export const Picture = (props: PictureProps) => {
  return (
    <div className="Picture__div">
      <img className="Picture__img" src={props.img} alt="" />
    </div>
  );
};

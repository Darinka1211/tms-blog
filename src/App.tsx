import React from "react";
import { Button } from "./components/Button";
import BookmarkIcon from "./components/Img/flag.svg";
import dislikeIcon from "./components/Img/dislike.svg";
import likeIcon from "./components/Img/like.svg";
import "../src/App.css";

function App() {
  return (
    <div className="App">
      <Button
        text="Primary"
        onClick={() => console.log("Text")}
        className="button-primary"
        disable={false}
      />
      <Button
        text="Secondary"
        onClick={() => console.log("Text")}
        className="button-secondary"
        disable={false}
      />
      <Button
        text="Secondary 2"
        onClick={() => console.log("Text")}
        className="button-secondary2"
        disable={false}
      />
      <Button
        text="Button with icon"
        onClick={() => console.log("Text")}
        className="Bookmark-Icon"
        disable={false}
        icon={BookmarkIcon}
      />
      <Button
        text=""
        onClick={() => console.log("Text")}
        className="dislike-Icon"
        disable={false}
        icon={dislikeIcon}
      />
      <Button
        text=""
        onClick={() => console.log("Text")}
        className="like-Icon"
        disable={false}
        icon={likeIcon}
      />
    </div>
  );
}

export default App;

import React from "react";
import { Textarea } from "./components/Textarea/Textarea";
import { useState } from "react";
import { Input } from "./components/Input/Input";
import { PostList } from "./components/PostList/PostList";
import { Button } from "./components/Button";
import BookmarkIcon from "./components/Img/flag.svg";
import dislikeIcon from "./components/Img/Dislike.svg";
import likeIcon from "./components/Img/Like.svg";
import { NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Blog } from "./pages/Blog/blog";
import Layout from "./components/Layout/Layout";
/* import { Title } from "./components/Title";
import { Likebar } from "./components/Likebar"; */

function App() {
  return (
    <div className="App">
      <Blog />
      <div className="buttons"></div>

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

      <Textarea
        text="Textarea"
        type="textarea"
        className="divTextarea"
        classNameTextarea="textarea"
        disabled={false}
        placeholder="Введите текст"
      />
      <Input
        text="Text"
        type="text"
        className="div_form"
        classNameInput="input_form"
        disabled={false}
        placeholder="Введите текст"
        label=""
      />
      <Input
        text="Email"
        type="email"
        className="div_form"
        classNameInput="input_form"
        disabled={false}
        placeholder="Введите email"
        label=""
      />
      <Input
        text="Password"
        type="password"
        className="div_form"
        classNameInput="input_form"
        disabled={false}
        placeholder="Введите пароль"
        label=""
      />

      <PostList />
    </div>
  );
}

export default App;

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
import { useTheme } from './features/theme'
import { Header } from "./components/Header/Header";
import { useAppDispatch } from './redux/hooks'
import { signUp } from './features/auth'
import { Sign } from "./components/Sign";
import { LogIn } from "./components/LogIn";



function App() {
  return (
    <div className="App">

      {/*
      
      
{/* 
      <Button
        text="Primary"
        onClick={() => console.log("Text")}
        className="button-primary"
        disabled={false}
      />
      <Button
        text="Secondary"
        onClick={() => console.log("Text")}
        className="button-secondary"
        disabled={false}
      />
      <Button
        text="Secondary 2"
        onClick={() => console.log("Text")}
        className="button-secondary2"
        disabled={false}
      />
      <Button
        text="Button with icon"
        onClick={() => console.log("Text")}
        className="Bookmark-Icon"
        disabled={false}
        icon={BookmarkIcon}
      />
      <Button
        text=""
        onClick={() => console.log("Text")}
        className="dislike-Icon"
        disabled={false}
        icon={dislikeIcon}
      />
      <Button
        text=""
        onClick={() => console.log("Text")}
        className="like-Icon"
        disabled={false}
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

      <PostList /> */}

    </div>
  );
}

export default App;

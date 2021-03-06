
import React from "react";

import { Header } from "./components/Header/Header";

import { Button } from "./components/Button";
import BookmarkIcon from "./components/Img/flag.svg";
import dislikeIcon from "./components/Img/dislike.svg";
import likeIcon from "./components/Img/like.svg";
import "../src/App.css";
import { Textarea } from "./components/Textarea/Textarea";
import { useState } from "react";
import { Input } from "./components/Input/Input";
import { PostCard } from "./components/PostCard/PostCard";
import { PostCardMini } from "./components/PostCardMini/PostCardMini";
import { PostCardMicro } from "./components/PostCardMicro/PostCardMicro";
import {PostList} from "./components/PostList/PostList"



function App() {
  return (
    <div className="App">

      <Header></Header>
    
      {/* <nav>
        
          <Link to="/posts">Posts</Link>
          <Link to="/posts/1">Post 1</Link>
          <Link to="/posts/add">Add post</Link>
          <Link to="/search">Search</Link>
        
      </nav> */}
      

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
        placeholder="?????????????? ??????????"
      />
      <Input
        text="Text"
        type="text"
        className="div_form"
        classNameInput="input_form"
        disabled={false}
        placeholder="?????????????? ??????????"
        label=""
      />
      <Input
        text="Email"
        type="email"
        className="div_form"
        classNameInput="input_form"
        disabled={false}
        placeholder="?????????????? email"
        label=""
      />
      <Input
        text="Password"
        type="password"
        className="div_form"
        classNameInput="input_form"
        disabled={false}
        placeholder="?????????????? ????????????"
        label=""
      />

       
<PostList/>



    </div>
  );
}

export default App;

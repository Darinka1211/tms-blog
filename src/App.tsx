
import React from "react";
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

       
<PostList/>

    </div>
  );
}

export default App;

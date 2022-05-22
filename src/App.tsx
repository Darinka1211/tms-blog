import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "./components/Button/Button";
import { useTheme } from "./features/theme";
import { setTheme } from "./features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { postsData } from "./redux/postsData";
import { fetchPosts } from "./features/posts";
import { usePosts } from "./features/posts/usePosts";
import LikeIcon from "./components/Img/like.svg"
import DisLikeIcon from "./components/Img/dislike.svg"

function App() {
  const { theme, toggleTheme } = useTheme();
  const { posts, onLikePost, onDisLikePost } = usePosts();

  return (
    <div className={`App theme--${theme}`}>
      <Button text="Primary" className="primary" onClick={toggleTheme} />
      {posts?.map((post) => {
        return (
          <div key={post.id}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span> {post.title}</span>
              <span> {String(post.like)}</span>
            </div>
<Button 
className="secondary"
onClick={()=> onLikePost(post.id)}
icon={<LikeIcon/>} />
<Button 
className="secondary"
onClick={()=> onLikePost(post.id)}
icon={<DisLikeIcon/>} />



          </div>
        );
      })}
    </div>
  );
}

export default App;

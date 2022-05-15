import React from "react";
import { Header } from "../Header/Header";
import { TitleBlog } from "../TitleBlog/TitleBlog";
import { PostCard } from "../PostCard/PostCard";
import { PostCardMini } from "../PostCardMini/PostCardMini";
import { PostCardMicro } from "../PostCardMicro/PostCardMicro";
import { Footer } from "../Footer/Footer";
import { Pages } from "../Pages/Pages";
import "./PostList.css";

type PostListProps = {
  className?: string;
};

export const PostList = (props: PostListProps) => {
  return (
    <div className="PostList__container">
      <Header />
      <div className="wrapperPostList">
        <TitleBlog />
        <div className="contentPostList">
          <div className="onePostList">
            <PostCard />
          </div>
          <div className="twoPostList">
            <PostCardMini />
          </div>
          <div className="threePostList">
            <PostCardMini />
          </div>
          <div className="fourPostList">
            <PostCardMini />
          </div>
          <div className="fivePostList">
            <PostCardMini />
          </div>
          <div className="sixPostList">
            <PostCardMicro />
          </div>
          <div className="sevenPostList">
            <PostCardMicro />
          </div>
          <div className="eightPostList">
            <PostCardMicro />
          </div>
          <div className="ninePostList">
            <PostCardMicro />
          </div>
          <div className="tenPostList">
            <PostCardMicro />
          </div>
          <div className="elevenPostList">
            <PostCardMicro />
          </div>
        </div>
        <Pages />
        <Footer />
      </div>
    </div>
  );
};

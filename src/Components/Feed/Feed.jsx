import React from "react";
import { useGetAllPostQuery } from "../../app/fetures/postApi/postSlice";
import CreatePost from "../CreatePost/CreatePost";
import Post from "../Post/Post";
import Loader from "../Spiner/Loader";
import Stories from "../Stories/Stories";
import "./feed.scss";

const Feed = () => {
  const { data: posts, isLoading, isError } = useGetAllPostQuery();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Stories />
        <CreatePost />
        <Post posts={posts} isError={isError} />
      </div>
    </div>
  );
};

export default Feed;

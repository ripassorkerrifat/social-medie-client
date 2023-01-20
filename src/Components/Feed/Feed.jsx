import React from "react";
import CreatePost from "../CreatePost/CreatePost";
import Stories from "../Stories/Stories";
import "./feed.scss";

const Feed = () => {
  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Stories />
        <CreatePost />
      </div>
    </div>
  );
};

export default Feed;

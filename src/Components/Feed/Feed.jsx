import React from "react";
import Stories from "../Stories/Stories";
import "./feed.scss";

const Feed = () => {
  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Stories />
      </div>
    </div>
  );
};

export default Feed;

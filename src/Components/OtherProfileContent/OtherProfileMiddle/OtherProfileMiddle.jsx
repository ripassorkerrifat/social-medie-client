import React from "react";
import Post from "../../Post/Post";
import OtherProfileTop from "../OtherProfileTop/OtherProfileTop";
import "./otherProfileMiddle.css";

const OtherProfileMiddle = ({ data, posts, isError }) => {
  return (
    <div className="feedContainer">
      <div className="p-5 mt-7">
        <OtherProfileTop data={data} />
        <Post posts={posts} isError={isError} />
      </div>
    </div>
  );
};

export default OtherProfileMiddle;

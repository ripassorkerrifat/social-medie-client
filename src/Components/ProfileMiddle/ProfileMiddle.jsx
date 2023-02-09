import React from "react";
import CreatePost from "../CreatePost/CreatePost";
import Post from "../Post/Post";
import ProfileTop from "../ProfileTop/ProfileTop";
import "./profileMiddle.css";

const ProfileMiddle = ({ data, posts, isError }) => {
  return (
    <div className="feedContainer">
      <div className="p-5">
        <ProfileTop data={data} />
        <CreatePost />
        <Post posts={posts} isError={isError} />
      </div>
    </div>
  );
};

export default ProfileMiddle;

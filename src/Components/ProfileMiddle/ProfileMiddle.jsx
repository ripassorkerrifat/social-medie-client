import React from "react";
import CreatePost from "../CreatePost/CreatePost";
import Foloower from "../Followers/Foloower";
import Post from "../Post/Post";
import ProfileTop from "../ProfileTop/ProfileTop";
import "./profileMiddle.css";

const ProfileMiddle = ({ data, posts, isError }) => {
   return (
      <div className="feedContainer">
         <div className="md:p-5 p-3 mt-11">
            <ProfileTop data={data} />
            <Foloower posts={posts} data={data} />
            <CreatePost />
            <Post posts={posts} isError={isError} />
         </div>
      </div>
   );
};

export default ProfileMiddle;

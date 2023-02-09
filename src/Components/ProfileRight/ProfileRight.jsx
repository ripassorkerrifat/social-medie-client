import React from "react";
import AllFriend from "../AllFriends/AllFriend";
import AllPhotos from "../AllPhotos/AllPhotos";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import "./profileRight.css";

const ProfileRight = ({ data, posts }) => {
  return (
    <div className="rightbarContainer">
      <div className="mt-12 p-4">
        <PersonalInfo data={data} />
        <AllPhotos posts={posts} />
        <AllFriend />
      </div>
    </div>
  );
};

export default ProfileRight;

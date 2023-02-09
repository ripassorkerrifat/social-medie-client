import React from "react";
import AllFriend from "../../AllFriends/AllFriend";
import AllPhotos from "../../AllPhotos/AllPhotos";
import OtherpersonalInfo from "../OtherPersonalInfo/OtherpersonalInfo";
import "./OtherProfileRight.css";

const OtherProfileRight = ({ data, posts }) => {
  return (
    <div className="rightbarContainer">
      <div className="p-4 mt-12">
        <OtherpersonalInfo data={data} />
        <AllPhotos posts={posts} />
        <AllFriend />
      </div>
    </div>
  );
};

export default OtherProfileRight;

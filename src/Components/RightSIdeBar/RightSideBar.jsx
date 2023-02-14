import React from "react";
import Birhtday from "../Birthday/Birhtday";
import CancleRequest from "../CancleRequest/CancleRequest";
import FriendRequest from "../FriendRequest/FriendRequest";
import Online from "../Online/Online";
import "./rightbar.scss";

const RightSideBar = () => {
  return (
    <div className="rightbarContainer">
      <div className=" p-[12px] mt-[50px]">
        <FriendRequest />
        <Birhtday />
        <CancleRequest />
        <Online />
      </div>
    </div>
  );
};

export default RightSideBar;

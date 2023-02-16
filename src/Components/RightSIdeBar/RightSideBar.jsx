import React from "react";
import Birhtday from "../Birthday/Birhtday";
import CancleRequest from "../CancleRequest/CancleRequest";
import DeveloperInfo from "../DeveloperInfo/DeveloperInfo";
import FriendRequest from "../FriendRequest/FriendRequest";
import "./rightbar.scss";

const RightSideBar = () => {
  return (
    <div className="rightbarContainer">
      <div className=" p-[12px] mt-[50px]">
        <DeveloperInfo />
        <FriendRequest />

        <Birhtday />
        <CancleRequest />
      </div>
    </div>
  );
};

export default RightSideBar;

import React from "react";
import "./storyCard.scss";

const StoryCard = ({ user }) => {
  return (
    <div className="storyCard">
      <div className="overlay"></div>
      <img className="storyProfile" src={user.profilePicture} alt="" />
      <img className="storyBg" src={user?.profilePicture} alt="" />
      <span className="userName ">{user.name}</span>
    </div>
  );
};

export default StoryCard;

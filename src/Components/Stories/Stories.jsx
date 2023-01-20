import React from "react";
import "./stories.scss";
import upload from "../../assets/person/upload.png";
import user from "../../assets/person/user.jpg";
import StoryCard from "../StoryCard/StoryCard";
import { Users } from "../../data";

const Stories = () => {
  return (
    <div className="stories">
      <div className="storyCard">
        <div className="overlay"></div>
        <img className="storyProfile" src={user} alt="" />
        <img className="storyBg" src={user} alt="" />
        <img className="storyAdd" src={upload} alt="" />
        <span className="userName">user@users</span>
      </div>
      {Users.map((user, i) => (
        <StoryCard key={i} user={user} />
      ))}
    </div>
  );
};

export default Stories;

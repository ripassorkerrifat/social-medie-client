import React from "react";
import AllFriend from "../AllFriends/AllFriend";
import AllPhotos from "../AllPhotos/AllPhotos";
import CreatePost from "../CreatePost/CreatePost";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Post from "../Post/Post";
import ProfileTop from "../ProfileTop/ProfileTop";
import "./content.css";

const ProfileContent = () => {
  return (
    <div className="profile-content-container">
      <div className=" mt-8 px-5 md:pt-5">
        <ProfileTop />
        <div className="grid md:grid-cols-3 gap-5 mt-7">
          <div className="md:col-span-2 md:sticky md:h-screen post-section">
            <div className="m-1">
              <CreatePost />
            </div>
            <Post />
          </div>
          <div className="col-span-1 sticky h-screen personal-info p-4 bg-[#f1f1f1] hidden sm:block">
            <PersonalInfo />
            <AllPhotos />
            <AllFriend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;

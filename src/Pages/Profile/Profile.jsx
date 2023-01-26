import React from "react";
import ProfileContent from "../../Components/ProfileContent/ProfileContent";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <div className="profileContainer">
        <Sidebar />
        <ProfileContent />
      </div>
    </>
  );
};

export default Profile;

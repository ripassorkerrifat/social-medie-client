import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ProfileContent from "../../Components/ProfileContent/ProfileContent";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./profile.css";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="profileContainer">
        <Sidebar />
        <ProfileContent />
      </div>
    </div>
  );
};

export default Profile;

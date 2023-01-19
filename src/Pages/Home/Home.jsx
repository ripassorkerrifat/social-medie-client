import React from "react";
import Feed from "../../Components/Feed/Feed";
import Navbar from "../../Components/Navbar/Navbar";
import RightSideBar from "../../Components/RightSIdeBar/RightSideBar";
import Sidebar from "../../Components/Sidebar/Sidebar";

import "./home.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Feed from "../../Components/Feed/Feed";
import RightSideBar from "../../Components/RightSIdeBar/RightSideBar";
import Sidebar from "../../Components/Sidebar/Sidebar";

import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <RightSideBar />
      </div>
    </>
  );
};

export default Home;

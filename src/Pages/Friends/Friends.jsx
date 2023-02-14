import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MyAllFriends from "./MyAllFriends/MyAllFriends";

const Friends = () => {
  return (
    <div className="bg-[#f1f1f1] w-full flex ">
      <Sidebar />
      <MyAllFriends />
    </div>
  );
};

export default Friends;

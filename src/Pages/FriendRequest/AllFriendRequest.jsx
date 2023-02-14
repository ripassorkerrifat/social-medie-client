import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import AllRequest from "./AllRequest/AllRequest";

const AllFriendRequest = () => {
  return (
    <div className="bg-[#f1f1f1] w-full flex">
      <Sidebar />
      <AllRequest />
    </div>
  );
};

export default AllFriendRequest;

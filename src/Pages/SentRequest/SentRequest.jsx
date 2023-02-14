import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import AllSentReq from "./AllSentReq/AllSentReq";

const SentRequest = () => {
  return (
    <div className="bg-[#f1f1f1] w-full flex ">
      <Sidebar />
      <AllSentReq />
    </div>
  );
};

export default SentRequest;

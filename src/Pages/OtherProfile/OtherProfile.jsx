import React from "react";
import OtherPrifileContent from "../../Components/OtherProfileContent/OtherPrifileContent";
import Sidebar from "../../Components/Sidebar/Sidebar";

const OtherProfile = () => {
  return (
    <div className="flex align-middle w-full bg-[#f1f1f1]">
      <Sidebar />
      <OtherPrifileContent />
    </div>
  );
};

export default OtherProfile;

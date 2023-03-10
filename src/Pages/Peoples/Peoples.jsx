import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import AllPeoples from "./AllPeoples/AllPeoples";

const Peoples = () => {
   return (
      <div className="bg-[#f1f1f1] w-full flex">
         <Sidebar />
         <AllPeoples />
      </div>
   );
};

export default Peoples;

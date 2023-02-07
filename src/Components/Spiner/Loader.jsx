import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-16 h-16 animate-spin  rounded-full bg-gradient-to-r from-purple-400 via-blue-600 to-rose-600 ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[54px] h-[54px] bg-white rounded-full border-2 border-white"></div>
      </div>
    </div>
  );
};

export default Loader;

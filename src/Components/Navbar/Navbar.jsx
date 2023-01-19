import React from "react";
import "./navbar.scss";
import { ImSearch } from "react-icons/im";
import { BsMessenger } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="leftside">
        <div className="logo">Social Media</div>
      </div>
      <div className="center hidden md:inline-block">
        <div class=" relative w-[90%] m-auto">
          <input
            type="text"
            class=" form-control block rounded-2xl w-full px-9 py-1.5 text-base font-normal text-gray-700 bg-gray-100 hover:bg-gray-200 bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:outline-none
        "
            placeholder="Search here......"
          />
          <ImSearch className="absolute top-2.5 left-2 text-black" />
        </div>
      </div>

      <div className="rightside">
        <div className="navkinks">
          <div className="relative">
            <BsMessenger className="link" />
            {/* <p className="absolute -top-2 -right-0 text-[14px] font-bold  text-[#ff059b]">
              2
            </p> */}
          </div>
          <div className="relative">
            <IoMdNotifications className="link" />
            {/* <p className="absolute -top-2 -right-0 text-[14px] font-bold  text-[#ff059b] ">
              12
            </p> */}
          </div>
          <CgProfile className="link" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

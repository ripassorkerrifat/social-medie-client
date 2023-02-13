import React, { useContext } from "react";
import { AiFillHome, AiFillSave, AiFillSetting } from "react-icons/ai";
import { MdEventSeat } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import AddFriend from "../AddFriend/AddFriend";

const Sidebar = () => {
  const { logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout().then();
  };

  return (
    <div className="sideContainer max-w-[370px]">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Link to={"/"} className="sidebarListItem">
            <AiFillHome className="sidebarIcon" />
            <span className="sidebarText">Home</span>
          </Link>
          <Link to={"/my-profile"} className="sidebarListItem">
            <CgProfile className="sidebarIcon" />
            <span className="sidebarText">Profile</span>
          </Link>

          <li className="sidebarListItem">
            <BsFillCameraVideoFill className="sidebarIcon" />
            <span className="sidebarText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <FaUserFriends className="sidebarIcon" />
            <span className="sidebarText">Friends</span>
          </li>
          <li className="sidebarListItem">
            <IoIosPeople className="sidebarIcon" />
            <span className="sidebarText">Peoples</span>
          </li>
          <li className="sidebarListItem">
            <AiFillSave className="sidebarIcon" />
            <span className="sidebarText">Saved</span>
          </li>
          <li className="sidebarListItem">
            <MdEventSeat className="sidebarIcon" />
            <span className="sidebarText">Events</span>
          </li>
          <li className="sidebarListItem">
            <AiFillSetting className="sidebarIcon" />
            <span className="sidebarText"> Setting & privacy</span>
          </li>
          <li onClick={handleLogOut} className="sidebarListItem">
            <FiLogOut className="sidebarIcon" />
            <span className="sidebarText">Logout</span>
          </li>
        </ul>

        <div>
          <AddFriend />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

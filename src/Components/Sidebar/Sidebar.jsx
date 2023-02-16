import React, { useContext } from "react";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { MdEventSeat } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import AddFriend from "../AddFriend/AddFriend";
import { GoRequestChanges } from "react-icons/go";
import {
  useGetAllUserQuery,
  useGetUserByEmailQuery,
} from "../../app/fetures/userApi/userSlice";

const Sidebar = () => {
  const { logout, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logout().then();
  };

  const { data: currentUser } = useGetUserByEmailQuery(user.email);

  const { data: users, isError, isLoading } = useGetAllUserQuery();

  return (
    <div className="sideContainer lg:max-w-[350px] md:max-w-[300px]">
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

          <Link to={"/friends"} className="sidebarListItem">
            <FaUserFriends className="sidebarIcon" />
            <span className="sidebarText">Friends</span>
          </Link>
          <Link to={"/peoples"} className="sidebarListItem">
            <IoIosPeople className="sidebarIcon" />
            <span className="sidebarText">Peoples</span>
          </Link>

          <Link to={"/sent-req"} className="sidebarListItem">
            <GoRequestChanges className="sidebarIcon" />
            <span className="sidebarText">Sent request</span>
          </Link>
          <Link to={"/all-req"} className="sidebarListItem">
            <MdEventSeat className="sidebarIcon" />
            <span className="sidebarText">Friend request</span>
          </Link>
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
          <AddFriend
            currentUser={currentUser}
            users={users}
            isError={isError}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { Fragment } from "react";
import "./navbar.scss";
import { ImSearch } from "react-icons/im";
import { BsMessenger } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiLogIn } from "react-icons/fi";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="leftside">
        <Link
          to={"/"}
          className="font-semibold text-[#ff059b] lg:text-3xl md:text-2xl text-xl md:px-6 py-2"
        >
          Social Media
        </Link>
      </div>
      <div className="center hidden md:inline-block">
        <div className=" relative w-[90%] m-auto">
          <input
            type="text"
            className=" form-control block rounded-2xl w-full px-9 py-1.5 text-base font-normal text-gray-700 bg-gray-100 hover:bg-gray-200 bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:outline-none
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

          <div className="ml-[5px]">
            <Menu as="div" className="relative inline-block mt-[6px]">
              <div>
                <Menu.Button className="">
                  {/* <CgProfile className="link" aria-hidden="true" /> */}
                  <img
                    className="rounded-full   w-[37px] h-[37px] ml-[10px]"
                    src="https://images.news18.com/ibnlive/uploads/2021/02/1612707348_tiger.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normal"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg shadow-[#080808] focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to={"/profile"}
                          className={`${
                            active ? "bg-[#ff059b] text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                        >
                          {active ? (
                            <CgProfile
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <CgProfile
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to={"/"}
                          className={`${
                            active ? "bg-[#ff059b] text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                        >
                          {active ? (
                            <AiFillHome
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <AiFillHome
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Home
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={`${
                            active ? "bg-[#ff059b] text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                        >
                          {active ? (
                            <AiFillSetting
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <AiFillSetting
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Setting & privacy
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={`${
                            active ? "bg-[#ff059b] text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                        >
                          {active ? (
                            <FiLogIn
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <FiLogIn
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Log out
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

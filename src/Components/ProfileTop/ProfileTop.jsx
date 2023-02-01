import React from "react";
import "./profileTop.css";
import { AiFillCamera } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { useState } from "react";

const ProfileTop = () => {
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  return (
    <div className="profile-top-container border-b-2">
      {/* profile top cover photo  */}
      <div className="relative">
        <img
          className="w-full lg:h-[350px] md:h-[300px] h-[200px] rounded-md"
          src="https://similarworlds.com/facebookcovers/facebook-cover-photos-timeline/fb/places/Colorful-New-York-City-Facebook-Cover.jpg"
          alt=""
        />
        <label htmlFor="">
          {" "}
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm px-4 py-[6px] mr-4 rounded-md inline-block absolute bottom-3 right-0">
            <AiFillCamera className="inline-block text-xl  mr-1" /> Edit cover
            photo
          </button>
          <input
            type="file"
            name="file"
            id="file"
            accept=".png,.jpg,.jpeg"
            className="hidden"
            onChange={(e) => setCoverPhoto(e.target.files[0])}
          />
        </label>
      </div>
      {/* profile bottom profile edit/add/main section*/}
      <div className="my-4  lg:mx-12 md:flex justify-between items-center">
        <div className="md:flex items-center relative ">
          <img
            className="lg:h-28 lg:w-28 md:h-24 md:w-24 w-14 h-14 rounded-full"
            src="https://similarworlds.com/facebookcovers/facebook-cover-photos-timeline/fb/places/Colorful-New-York-City-Facebook-Cover.jpg"
            alt=""
          />
          <span className="md:w-7 md:h-7 w-5 h-5 rounded-full bg-gray-300 items-center flex justify-center absolute bottom-10 md:bottom-1 left-9 md:left-[78px]">
            <AiFillCamera className="inline-block md:text-xl text-base  " />
          </span>
          <div className="md:ml-3 ml-1  leading-5">
            <h4 className="lg:text-2xl md:text-xl w-full text-base font-semibold">
              Ripas Sorker Rifat
            </h4>
            <span>1200 friends & {""}</span>
            <span>34 mutuals </span>
            <div className="md:flex hidden">
              <img
                className="h-6 w-6 rounded-full bg-cover -mr-1"
                src="https://similarworlds.com/facebookcovers/facebook-cover-photos-timeline/fb/places/Colorful-New-York-City-Facebook-Cover.jpg"
                alt=""
              />
              <img
                className="h-6 w-6 rounded-full bg-cover -mr-1"
                src="https://similarworlds.com/facebookcovers/facebook-cover-photos-timeline/fb/places/Colorful-New-York-City-Facebook-Cover.jpg"
                alt=""
              />
              <img
                className="h-6 w-6 rounded-full bg-cover -mr-1"
                src="https://similarworlds.com/facebookcovers/facebook-cover-photos-timeline/fb/places/Colorful-New-York-City-Facebook-Cover.jpg"
                alt=""
              />
              <img
                className="h-6 w-6 rounded-full bg-cover -mr-1"
                src="https://similarworlds.com/facebookcovers/facebook-cover-photos-timeline/fb/places/Colorful-New-York-City-Facebook-Cover.jpg"
                alt=""
              />
              <img
                className="h-6 w-6 rounded-full bg-cover -mr-1"
                src="https://similarworlds.com/facebookcovers/facebook-cover-photos-timeline/fb/places/Colorful-New-York-City-Facebook-Cover.jpg"
                alt=""
              />
              <img
                className="h-6 w-6 rounded-full bg-cover -mr-1"
                src="https://similarworlds.com/facebookcovers/facebook-cover-photos-timeline/fb/places/Colorful-New-York-City-Facebook-Cover.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="text-end inline-block">
          {/* <button className="bg-[#ff059b]  text-gray-200 text-sm px-4 py-[6px] mr-4 rounded-md inline-block ">
             <MdAdd className="inline-block text-xl  mr-1" /> Add Friend
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm px-4 py-[6px] mr-4 rounded-md inline-block ">
           <BsMessenger className="inline-block text-xl  mr-1" />   Message
          </button> */}
          <button className="bg-[#ff059b]  text-gray-200 text-sm md:px-4 px-1 py-1 md:py-[6px] md:mr-4 rounded-md inline-block mr-2">
            <MdAdd className="inline-block md:text-xl text-lg  mr-1" /> Add
            Story
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm md:px-4 
          md:py-[6px] px-1 py-1 md:mr-4 rounded-md md:mt-0 mt-2"
          >
            <CiEdit className="inline-block md:text-xl text-lg mr-1 " /> Edit
            Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;

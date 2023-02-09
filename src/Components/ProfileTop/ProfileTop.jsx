import React, { useContext } from "react";
import "./profileTop.css";
import { AiFillCamera } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import CoverAndProfileModal from "../CoverAndProfileModal/CoverAndProfileModal";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const ProfileTop = ({ data }) => {
  const { user } = useContext(AuthContext);
  const [photoTitle, setPhotoTitle] = useState("");

  return (
    <div className="profile-top-container border-b-2">
      {/* profile top cover photo  */}
      <div className="relative">
        {data?.coverImg ? (
          <img
            className="w-full lg:h-[350px] md:h-[300px] h-[200px] rounded-md"
            src={data.coverImg}
            alt=""
          />
        ) : (
          <div className="relative bg-gray-800 lg:h-[350px] md:h-[300px] h-[200px] flex justify-center items-center">
            <h4 className="text-[#ff059b] font-semibold lg:text-5xl md:text-3xl">
              Add your cover photo
            </h4>
          </div>
        )}

        <label
          htmlFor="cover-photo-modal"
          onClick={() => setPhotoTitle("coverPhoto")}
          className=" inline-block absolute bottom-3 right-0 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm px-2 md:px-4 py-1 md:py-[6px] mr-4 rounded-md "
        >
          <AiFillCamera className="inline-block text-xl  mr-1" /> Edit cover
          photo
        </label>
      </div>
      {/* profile bottom profile edit/add/main section*/}
      <div className="my-7  lg:mx-12 md:flex justify-between items-center">
        <div className="md:flex items-center relative ">
          {data?.profileImg ? (
            <img
              className="lg:h-28 lg:w-28 md:h-24 md:w-24 w-14 h-14 rounded-full"
              src={data?.profileImg}
              alt=""
            />
          ) : (
            <img
              className="lg:h-28 lg:w-28 md:h-24 md:w-24 w-14 h-14 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA7r1pd3h80Lq9uOByb2ALq5FoOAe-Mq0j3_EZzmOo4tXO0CUkRHQrbXMruyClSGA87E&usqp=CAU"
              alt=""
            />
          )}

          <label
            htmlFor="cover-photo-modal"
            onClick={() => setPhotoTitle("profilePhoto")}
          >
            <span className="md:w-7 md:h-7 w-5 h-5 rounded-full bg-gray-300 items-center flex justify-center absolute bottom-14 md:bottom-1 left-8 md:left-[74px]">
              <AiFillCamera className="inline-block md:text-xl text-base  " />
            </span>
          </label>
          <div className="md:ml-3 ml-1  leading-5">
            <h4 className="lg:text-2xl md:text-xl w-full text-base font-semibold mt-3">
              {user?.displayName}
            </h4>
            <span>1200 friends &</span>
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
            </div>
          </div>
        </div>
        {/* <div className="text-end inline-block">
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
        </div> */}
      </div>
      {photoTitle && (
        <CoverAndProfileModal
          photoTitle={photoTitle}
          setPhotoTitle={setPhotoTitle}
        />
      )}
    </div>
  );
};

export default ProfileTop;

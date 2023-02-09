import React from "react";
import { BsMessenger } from "react-icons/bs";
import { MdAdd } from "react-icons/md";

const OtherProfileTop = ({ data }) => {
  return (
    <div>
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
              <h4 className="text-[#ff059b] text-center font-semibold lg:text-5xl md:text-3xl">
                No cover photo uploaded...
              </h4>
            </div>
          )}
        </div>
        {/* profile bottom profile edit/add/main section*/}
        <div className="my-4  lg:mx-12 md:flex justify-between items-center">
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

            <div className="md:ml-3 ml-1  leading-5">
              <h4 className="lg:text-2xl md:text-xl w-full text-base font-semibold mt-3">
                {data?.name}
              </h4>
              <span>1200 friends &</span>
              <span>34 mutuals </span>
              {/* <div className="md:flex hidden">
                <img
                  className="h-6 w-6 rounded-full bg-cover -mr-1"
                  src="https://similarworlds.com/facebookcovers/facebook-cover-photos-timeline/fb/places/Colorful-New-York-City-Facebook-Cover.jpg"
                  alt=""
                />
              </div> */}
            </div>
          </div>
          <div className="text-end inline-block">
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm md:px-4 
          md:py-[6px] px-1 py-1 md:mr-4 rounded-md md:mt-0 mt-2  mr-2 "
            >
              <BsMessenger className="inline-block md:text-xl text-lg mr-1" />{" "}
              Message
            </button>
            <button className="bg-[#ff059b]  text-gray-200 text-sm md:px-4 px-1 py-1 md:mt-2 md:py-[6px] md:mr-4 rounded-md inline-block mr-2">
              <MdAdd className="inline-block md:text-xl text-lg  " /> Add Friend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProfileTop;

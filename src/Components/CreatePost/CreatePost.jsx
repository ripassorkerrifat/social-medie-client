import React from "react";
import "./createPost.css";
import { TbVideoPlus } from "react-icons/tb";
import { FaPhotoVideo } from "react-icons/fa";
import { GrEmoji } from "react-icons/gr";

const CreatePost = () => {
  return (
    <div className="createPost p-4">
      <div className="top-section flex w-full">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src="https://images.news18.com/ibnlive/uploads/2021/02/1612707348_tiger.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normal"
          alt=""
        />
        <input
          type="text"
          class=" form-control block rounded-2xl w-full mx-auto px-3 py-1.5 text-base font-normal text-gray-900 bg-gray-100 hover:bg-gray-200 bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:outline-none placeholder:text-gray-700
        "
          placeholder="What's on your mind, Ripas Sorker?"
        />
      </div>
      <hr className="border-b border-gray-400 mt-3 opacity-60" />
      <div className="bottom-section flex items-center justify-between mt:mx-4 mt-3">
        <div className="flex items-center">
          <TbVideoPlus className="inline-block md:text-3xl text-2xl text-[#ff059b]" />
          <span className="inline-block font-semibold ml-2 ">
            Live <span className="hidden md:inline-block">Video</span>
          </span>
        </div>
        <div className="flex items-center">
          <FaPhotoVideo className="inline-block md:text-3xl text-xl text-green-500" />
          <span className="inline-block font-semibold ml-2 ">
            Photo<span className="hidden md:inline-block">/Video</span>
          </span>
        </div>
        <div className="flex items-center">
          <GrEmoji className="inline-block md:text-3xl text-xl text-yellow-500" />
          <span className="inline-block font-semibold ml-2 ">
            Felling <span className="hidden md:inline-block">/Activity</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

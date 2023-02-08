import React, { useContext } from "react";
import "./createPost.css";
import { TbVideoPlus } from "react-icons/tb";
import { FaPhotoVideo } from "react-icons/fa";
import { GrEmoji } from "react-icons/gr";
import { useState } from "react";
import PostModal from "../PostModal/PostModal";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const CreatePost = () => {
  const { user } = useContext(AuthContext);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="createPost p-4 ">
      <div className="top-section flex w-full">
        {user.photoURL ? (
          <img
            src={user?.photoURL}
            className="h-10 w-10 rounded-full inline-block"
            alt=""
          />
        ) : (
          <img
            className="h-10 w-10 rounded-full inline-block"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA7r1pd3h80Lq9uOByb2ALq5FoOAe-Mq0j3_EZzmOo4tXO0CUkRHQrbXMruyClSGA87E&usqp=CAU"
            alt=""
          />
        )}
        <label
          htmlFor="post-modal"
          onClick={() => setOpenModal(true)}
          className=" w-[90%] mx-auto"
        >
          <div className="  block rounded-2xl px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 hover:bg-gray-200 border border-solid border-gray-300 transition ease-in-out m-0 ">
            What's on your mind? {""}
            {`${user?.displayName && user.displayName.slice(0, 12)}....`}
          </div>
        </label>
      </div>
      <hr className="border-b border-gray-400 mt-3 opacity-60" />

      <div className="bottom-section flex items-center justify-between mt:mx-4 mt-3">
        <label
          htmlFor="post-modal"
          className="flex items-center hover:bg-gray-300 rounded-lg p-2"
        >
          <TbVideoPlus className="inline-block md:text-3xl text-2xl text-[#ff059b]" />
          <span className="inline-block font-semibold ml-2 ">
            Live <span className="hidden md:inline-block">Video</span>
          </span>
        </label>
        <label
          htmlFor="post-modal"
          onClick={() => setOpenModal(true)}
          className="flex items-center hover:bg-gray-300 rounded-lg p-2"
        >
          <FaPhotoVideo className="inline-block md:text-3xl text-xl text-green-500" />
          <span className="inline-block font-semibold ml-2 ">
            Photo<span className="hidden md:inline-block">/Video</span>
          </span>
        </label>
        <label
          htmlFor="post-modal"
          onClick={() => setOpenModal(true)}
          className="flex items-center hover:bg-gray-300 rounded-lg p-2"
        >
          <GrEmoji className="inline-block md:text-3xl text-xl text-yellow-500" />
          <span className="inline-block font-semibold ml-2 ">
            Felling <span className="hidden md:inline-block">/Activity</span>
          </span>
        </label>
      </div>
      {openModal && <PostModal setOpenModal={setOpenModal} />}
    </div>
  );
};

export default CreatePost;

import React from "react";
import "./createPost.css";
import { TbVideoPlus } from "react-icons/tb";
import { FaPhotoVideo } from "react-icons/fa";
import { GrEmoji } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import PostModal from "../PostModal/PostModal";

const CreatePost = () => {
  const [file, setFile] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const removeImage = () => {
    setFile(null);
  };

  return (
    <div className="createPost p-4 ">
      <div className="top-section flex w-full">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src="https://images.news18.com/ibnlive/uploads/2021/02/1612707348_tiger.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normal"
          alt=""
        />
        <label
          htmlFor="post-modal"
          onClick={() => setOpenModal(true)}
          className="w-full"
        >
          <div className="  block rounded-2xl w-full mx-auto px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 hover:bg-gray-200 border border-solid border-gray-300 transition ease-in-out m-0 ">
            What's on your mind, Ripas Sorker?
          </div>
        </label>
      </div>
      <hr className="border-b border-gray-400 mt-3 opacity-60" />

      {file && (
        <div className="mt-2 relative">
          <img
            src={URL.createObjectURL(file)}
            className="object-fill max-h-[500px] w-full rounded-lg"
            alt=""
          />
          <span className="bg-white h-7 w-7 rounded-full absolute top-1 right-1 flex justify-center items-center">
            <IoMdClose
              onClick={removeImage}
              className="text-2xl font-semibold text-gray-800  inline-block"
            />
          </span>
        </div>
      )}
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
        {/* <label
          htmlFor="file"
          className="flex items-center hover:bg-gray-300 rounded-lg p-2"
        >
          <FaPhotoVideo className="inline-block md:text-3xl text-xl text-green-500" />
          <span className="inline-block font-semibold ml-2 ">
            Photo<span className="hidden md:inline-block">/Video</span>
          </span>
          <input
            type="file"
            name="file"
            id="file"
            accept=".png,.jpg,.jpeg"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label> */}
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

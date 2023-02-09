import React, { useState } from "react";
import { useUpdatePostMutation } from "../../app/fetures/postApi/postSlice";
import Loader from "../Spiner/Loader";

const UpdatePostModal = ({ post, setShowUpdateModal }) => {
  const [postText, setPostText] = useState("");
  const [updatePost, { isLoading }] = useUpdatePostMutation();
  const handleUpdate = () => {
    const updatePostInfo = {
      _id: post._id,
      postText,
    };
    updatePost(updatePostInfo);
    setShowUpdateModal(false);
  };

  return (
    <div>
      <input type="checkbox" id="update-post" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="update-post"
            className="inline-flex bg-gray-300 rounded-full p-1 absolute right-3 top-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
          <h3 className="text-lg text-center font-bold">Update post</h3>

          <input
            type="text"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="w-full pt-5 p-2 md:placeholder:text-lg placeholder:text-gray-600 focus:outline-none focus:border-gray-300"
            placeholder="Update post......."
          />
          <div className="border-b-2"> </div>
          <button
            onClick={handleUpdate}
            type="submit"
            className="bg-[#eb0890] hover:bg-[#fd0298] text-gray-100 text-sm px-4 py-[8px] mt-4 w-full rounded-md inline-block"
          >
            {isLoading ? <Loader /> : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePostModal;

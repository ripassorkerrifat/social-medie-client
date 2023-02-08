import React, { useState } from "react";
import { useDeletePostMutation } from "../../app/fetures/postApi/postSlice";

const PostDeleteModal = ({ id, setShowDeleteModal }) => {
  const [aggre, setAggre] = useState(false);

  const [deletePost] = useDeletePostMutation();

  const handleDeletePost = () => {
    setAggre(true);
    if (aggre) {
      deletePost(id);
      setShowDeleteModal(false);
    }
  };

  return (
    <div>
      <input type="checkbox" id="delete-post" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="delete-post"
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
          <div>
            <h3 className="text-lg text-center font-bold">Delete Post</h3>
            <p className="py-4 text-center">
              Are you sure? You want to delete this post...
            </p>
            <div className="flex flex-row justify-center items-center">
              <button
                onClick={handleDeletePost}
                className="bg-[#ff059b] text-gray-100 text-sm px-7 py-[6px] mr-4 rounded-md inline-block"
              >
                Yes
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-400 text-gray-800 text-sm px-7 py-[6px] mr-4 rounded-md inline-block"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDeleteModal;

import React from "react";

const UpdatePostModal = ({ post }) => {
  //   console.log(post);
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
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">Are you sure? You want to delete this post...</p>
        </div>
      </div>
    </div>
  );
};

export default UpdatePostModal;

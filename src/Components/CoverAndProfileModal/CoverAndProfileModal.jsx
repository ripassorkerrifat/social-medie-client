import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { getImageLink } from "../../Api/getImageLink";

const CoverModal = ({ setPhotoTitle, photoTitle }) => {
  const [image, setImage] = useState(null);

  const removeImage = () => {
    setImage(null);
  };

  const handleUpload = (photoTitle) => {
    if (photoTitle === "profilePhoto") {
      getImageLink(image).then((data) => {
        const uploadPhoto = {
          profilePhoto: data,
        };
        console.log(uploadPhoto);
        setPhotoTitle("");
      });
    }
    if (photoTitle === "coverPhoto") {
      getImageLink(image).then((data) => {
        const uploadPhoto = {
          coverPhoto: data,
        };
        console.log(uploadPhoto);
        setPhotoTitle("");
      });
    }
  };
  const handleDelete = () => {
    setPhotoTitle("");
  };

  return (
    <div>
      <input type="checkbox" id="cover-photo-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="cover-photo-modal"
            class="inline-flex bg-gray-300 rounded-full p-1 absolute right-3 top-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
          <h3 className="text-lg text-center font-bold pb-2">
            Upload{" "}
            {photoTitle === "coverPhoto" ? "Cover Photo" : "Profile Photo"}{" "}
          </h3>
          <hr />
          <div className=" pt-4">
            <div className=" bg-white  m-auto border-2 border-dashed border-[#ff059b] rounded-lg">
              {image ? (
                <div className=" relative">
                  <img
                    src={URL.createObjectURL(image)}
                    className="object-fill max-h-[300px] w-full rounded-lg"
                    alt=""
                  />
                  <span className="bg-white h-7 w-7 rounded-full absolute top-1 right-1 flex justify-center items-center">
                    <IoMdClose
                      onClick={removeImage}
                      className="text-2xl font-semibold text-gray-800  inline-block"
                    />
                  </span>
                </div>
              ) : (
                <div className=" m-3 hover:bg-slate-200 duration-300 rounded-lg">
                  <label htmlFor="file">
                    <div className="w-full flex justify-center items-center flex-col p-3 py-6">
                      <FiUploadCloud className="text-3xl inline-block text-center text-[#ff059b]" />
                      <p className="text-gray-800">Upload Photo</p>
                    </div>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      accept=".png,.jpg,.jpeg"
                      className="hidden"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </label>
                </div>
              )}
            </div>
            <button
              onClick={() => handleUpload(photoTitle)}
              className="bg-[#eb0890] hover:bg-[#fd0298] text-gray-100 text-sm px-4 py-[8px] mt-4 w-full rounded-md inline-block"
            >
              Upload
            </button>
          </div>
          <button
            onClick={handleDelete}
            className=" bg-gray-300 hover:bg-gray-400 duration-300  text-gray-800 text-sm px-4 py-[8px] mt-4 w-full rounded-md inline-block"
          >
            Remove <MdDeleteForever className="inline-block mb-1" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoverModal;

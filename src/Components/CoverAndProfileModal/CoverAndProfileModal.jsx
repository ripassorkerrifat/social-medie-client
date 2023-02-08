import React, { useContext, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import SmallSpiner from "../Spiner/SmallSpiner";
import { toast } from "react-hot-toast";
import { useAddProfileOrCoverPhotoOrInfoMutation } from "../../app/fetures/userApi/userSlice";
import { useAddPostMutation } from "../../app/fetures/postApi/postSlice";

const CoverModal = ({ setPhotoTitle, photoTitle }) => {
  const { user, loading, setLoading, updateUserProfile } =
    useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);

  const [postPost, { isLoading }] = useAddPostMutation();

  const removeImage = () => {
    setImage(null);
  };

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;
  let currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const [addProfileInfo, { isError }] =
    useAddProfileOrCoverPhotoOrInfoMutation();

  const handleUpload = (photoTitle) => {
    setUploadLoading(true);
    const formData = new FormData();
    formData.append("image", image);

    fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setUploadLoading(false);
        const updateProfilePhoto = {
          email: user?.email,
          profileImg: data?.data?.display_url,
        };

        if (photoTitle === "profilePhoto") {
          const postInfo = {
            currentDate,
            currentTime,
            photoType: "profile",
            postImage: data.data.display_url,
            posterName: user?.displayName,
            posterEmail: user?.email,
            posterImg: data.data.display_url,
            reacts: [],
            comments: [],
          };

          updateUserProfile(user?.displayName, data.data.display_url).then(
            (data) => {
              addProfileInfo(updateProfilePhoto);
              postPost(postInfo);
              toast.success("Profile Photo uploaded....");
              setPhotoTitle("");
              setLoading(false);
            }
          );
        }
        if (photoTitle === "coverPhoto") {
          const postInfo = {
            currentDate,
            currentTime,
            photoType: "cover",
            postImage: data.data.display_url,
            posterName: user?.displayName,
            posterEmail: user?.email,
            posterImg: user?.photoURL,
            reacts: [],
            comments: [],
          };
          const updateCoverPhoto = {
            email: user?.email,
            coverImg: data?.data?.display_url,
          };
          addProfileInfo(updateCoverPhoto);
          postPost(postInfo);
          toast.success("Cover Photo uploaded....");
          setPhotoTitle("");
        }
      });
  };
  if (isError) {
    return <p>Something went wrong....</p>;
  }

  return (
    <div>
      <input type="checkbox" id="cover-photo-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="cover-photo-modal"
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
              {uploadLoading || isLoading || loading ? (
                <SmallSpiner />
              ) : (
                "Upload"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverModal;

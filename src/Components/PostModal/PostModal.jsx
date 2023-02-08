import React, { useContext, useState } from "react";
import { BiWorld } from "react-icons/bi";
import { BsEmojiFrown } from "react-icons/bs";
import { FiUploadCloud } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Picker from "emoji-picker-react";
import { useRef } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { useAddPostMutation } from "../../app/fetures/postApi/postSlice";
import { toast } from "react-hot-toast";

import SmallSpiner from "../Spiner/SmallSpiner";

const PostModal = ({ setOpenModal }) => {
  const [uploadLoading, setUploadLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);

  const [picker, setPicker] = useState(false);
  const [postText, setPostText] = useState("");
  const [cursorPosition, setCursorPosition] = useState();
  const textRef = useRef(null);

  const [postPost, { isError, isSuccess, isLoading }] = useAddPostMutation();

  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  const removeImage = () => {
    setFile(null);
  };

  const handleEmoji = ({ emoji }) => {
    const ref = textRef.current;
    ref.focus();
    const start = postText.substring(0, ref.selectionStart);
    const end = postText.substring(ref.selectionStart);
    const newtext = start + emoji + end;
    setPostText(newtext);
    setCursorPosition(start.length + emoji.length);
  };

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;
  let currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const handlePost = (event) => {
    event.preventDefault();

    if (file) {
      setUploadLoading(true);
      const formData = new FormData();
      formData.append("image", file);
      fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          const postInfo = {
            postText,
            currentDate,
            postImage: data.data.display_url,
            currentTime,
            posterName: user?.displayName,
            posterEmail: user?.email,
            posterImg: user?.photoURL,
            reacts: [],
            comments: [],
          };
          postPost(postInfo);
          setUploadLoading(false);
          setOpenModal(false);
          setPicker(false);
          setPostText("");
        });
    } else {
      const postInfo = {
        postText,
        currentDate,
        postImage: "",
        currentTime,
        posterName: user?.displayName,
        posterEmail: user?.email,
        posterImg: user?.photoURL,
        reacts: [],
        comments: [],
      };
      postPost(postInfo);
      setOpenModal(false);
      setPicker(false);
      setPostText("");
    }

    if (isSuccess) {
      return toast.success("Post added succesfully");
    }
  };
  if (isError) {
    return (
      <p className="mt-20 text-center">Some went wrong in upload post ....</p>
    );
  }
  return (
    <div>
      <input type="checkbox" id="post-modal" className="modal-toggle" />
      <div className="modal">
        <div className={`modal-box ${picker && "h-[590px]"}`}>
          <label
            htmlFor="post-modal"
            onClick={() => setPostText("")}
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
          <h3 className="text-lg text-center font-bold pb-2">Create post</h3>
          <hr />
          <form onSubmit={handlePost} className="">
            <div className="flex items-center align-middle my-3">
              {user.photoURL ? (
                <img
                  src={user?.photoURL}
                  className="h-12 w-12 rounded-full inline-block"
                  alt=""
                />
              ) : (
                <img
                  className="h-12 w-12 rounded-full inline-block"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA7r1pd3h80Lq9uOByb2ALq5FoOAe-Mq0j3_EZzmOo4tXO0CUkRHQrbXMruyClSGA87E&usqp=CAU"
                  alt=""
                />
              )}
              <div className="ml-3 leading-3">
                <h4 className="mb-2 font-semibold">{user?.displayName}</h4>
                <p>
                  <span>
                    <BiWorld className="inline-block ml-1" />
                  </span>
                </p>
              </div>
            </div>
            <div>
              <textarea
                type="text"
                ref={textRef}
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                className="w-full border-b-2 h-m-16 p-2  md:placeholder:text-lg placeholder:text-gray-600 focus:outline-none focus:border-gray-300 resize-none"
                placeholder={`What's on your mind? ${
                  user?.displayName && user.displayName.slice(0, 12)
                }....`}
              />
            </div>
            <label className="flex justify-end">
              <BsEmojiFrown
                onClick={() => setPicker(!picker)}
                size={24}
                className="inline-block mb-2 text-right text-[#ff059b] z-50"
              />
              {picker && (
                <div className="absolute rounded-lg bg-white z-50 md:right-10 md:top-[227px] top-[228px]">
                  <Picker onEmojiClick={handleEmoji} height={330} width={270} />
                </div>
              )}
            </label>
            <div className=" bg-white  m-auto border-2 border-dashed border-[#ff059b] rounded-lg">
              {file ? (
                <div className=" relative">
                  <img
                    src={URL.createObjectURL(file)}
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
                      <p className="text-gray-800">Add Photos/Videos</p>
                    </div>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      accept=".png,.jpg,.jpeg"
                      className="hidden"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </label>
                </div>
              )}
            </div>
            <button
              type="submit"
              className="bg-[#eb0890] hover:bg-[#fd0298] text-gray-100 text-sm px-4 py-[8px] mt-4 w-full rounded-md inline-block"
            >
              {isLoading || uploadLoading ? <SmallSpiner /> : "Post"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostModal;

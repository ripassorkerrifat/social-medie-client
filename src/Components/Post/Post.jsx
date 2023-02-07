import React, { useContext, useEffect, useState } from "react";
import {
  BsThreeDots,
  BsSuitHeartFill,
  BsFillEmojiAngryFill,
} from "react-icons/bs";
import { BiWorld, BiComment } from "react-icons/bi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import like1 from "../../assets/reaction/like1.gif";
import love1 from "../../assets/reaction/love1.gif";
import laughing1 from "../../assets/reaction/lauhing1.gif";
import wow1 from "../../assets/reaction/wow1.gif";
import sad1 from "../../assets/reaction/sad1.gif";
import angry1 from "../../assets/reaction/angry1.gif";
import like from "../../assets/reaction/like.svg";
import love from "../../assets/reaction/love.svg";
import laughing from "../../assets/reaction/laughing.svg";
import soaked from "../../assets/reaction/soaked.svg";
import sad from "../../assets/reaction/sad.svg";
import angry from "../../assets/reaction/angry.svg";
import TimeAgo from "timeago-react";
import {
  useAddPostMutation,
  useAddReactMutation,
  useGetAllPostQuery,
  useRemoveReactMutation,
} from "../../app/fetures/postApi/postSlice";
import Loader from "../Spiner/Loader";
import { toast } from "react-hot-toast";
import Comments from "./Comments";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Post = () => {
  const { user } = useContext(AuthContext);
  const [btnClicked, setBtnClicked] = useState(false);
  const [showReact, setShowReact] = useState(null);

  const reactData = [
    { name: "Like", img: like1, id: "1" },
    { name: "Love", img: love1, id: "2" },
    { name: "Haha", img: laughing1, id: "3" },
    { name: "Wow", img: wow1, id: "4" },
    { name: "Sad", img: sad1, id: "5" },
    { name: "Angry", img: angry1, id: "6" },
  ];

  const { data: posts, isLoading, isError } = useGetAllPostQuery();

  useEffect(() => {});

  const [addReact] = useAddReactMutation();
  const [removeReact] = useRemoveReactMutation();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <p className="mt-20 text-center">Some went wrong in fetching post ....</p>
    );
  }

  const handleAddReact = (reactImg, reactName, id) => {
    const reactData = {
      id,
      reactImg,
      reactName,
      userId: user.uid,
      reactorName: user.displayName,
    };
    addReact(reactData);
  };

  const handleRemoveReact = (id) => {
    const reactData = {
      id,
      userId: user.uid,
    };
    removeReact(reactData);
  };

  const handleShowReact = () => {
    if (!btnClicked) {
      setTimeout(() => {
        setBtnClicked(true);
      }, 1000);
    }
  };
  const handleHideReact = () => {
    if (btnClicked) {
      setTimeout(() => {
        setBtnClicked(false);
      }, 2000);
    }
  };

  return (
    <div onMouseOver={handleHideReact}>
      {posts.length ? (
        <div className="post-container">
          {posts.map((post, i) => (
            <div
              key={i}
              className="post-wrapper border rounded shadow-md my-6 mt-10"
            >
              <div className="post-top my-3 px-2 flex justify-between items-center">
                <div className="flex items-center align-middle">
                  {post.posterImg ? (
                    <img
                      className="w-12 h-12 rounded-full"
                      src={post.posterImg}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA7r1pd3h80Lq9uOByb2ALq5FoOAe-Mq0j3_EZzmOo4tXO0CUkRHQrbXMruyClSGA87E&usqp=CAU"
                      alt=""
                    />
                  )}

                  <div className="ml-3 leading-4">
                    <h4 className=" font-semibold">{post?.posterName}</h4>
                    <p>
                      <TimeAgo
                        datetime={`${post.currentDate} ${""} ${
                          post.currentTime
                        }`}
                      />
                      <span>
                        <BiWorld className="inline-block ml-1" />
                      </span>
                    </p>
                  </div>
                </div>
                <BsThreeDots className="inline-block text-2xl mr-2" />
              </div>
              <div className="post-center">
                <p className="px-2 pb-2">{post?.postText}</p>
                {post?.postImage && (
                  <img
                    className="md:max-h-[700px] h-[350] w-full bg-cover"
                    src={post?.postImage}
                    alt=""
                  />
                )}
              </div>
              <div className="post-bottom py-2 md:px-4 px-1 relative">
                <div className="flex justify-between align-middle">
                  <div className="flex">
                    <div className="bg-blue-500 rounded-full flex justify-center items-center  w-5 h-5">
                      <img
                        src={like}
                        alt=""
                        className="inline-block text-white text-xs"
                      />
                    </div>
                    <div className="bg-rose-500 rounded-full flex justify-center items-center 1 w-5 h-5">
                      <img
                        src={love}
                        alt=""
                        className="inline-block text-white text-xs"
                      />
                    </div>
                    <div className="bg-red-800 rounded-full flex justify-center items-center  w-5 h-5">
                      <img
                        src={soaked}
                        alt=""
                        className="inline-block text-white text-xs"
                      />
                    </div>
                    <span className="ml-2">
                      {post?.reacts?.length ? (
                        <span>
                          {post?.reacts?.length}
                          {""} reacts
                        </span>
                      ) : (
                        <span> 0 react</span>
                      )}
                    </span>
                  </div>
                  <p>
                    {post?.comments?.length ? (
                      <span>
                        {post?.comments?.length}
                        {""} comments
                      </span>
                    ) : (
                      <span> 0 comment</span>
                    )}
                  </p>
                </div>

                <div className="absolute md:top-0 top-2 left-0 ">
                  <div
                    className={`flex rounded-3xl border border-gray-300 bg-white md:h-12 h-10 ${
                      btnClicked && showReact === post._id ? "block" : "hidden"
                    }`}
                  >
                    {reactData.map((data, i) => (
                      <figure
                        key={i}
                        className="tooltip tooltip-top"
                        data-tip={data.name}
                      >
                        <img
                          className="h-full hover:scale-150 duration-200 "
                          src={data.img}
                          alt=""
                          onClick={() => {
                            setBtnClicked(false);
                            handleAddReact(data.img, data.name, post._id);
                          }}
                        />
                      </figure>
                    ))}
                  </div>
                </div>
                <div className="border-b border-gray-500 pt-3"></div>
                <div className="flex justify-between items-center pt-1">
                  <div onMouseOver={handleShowReact}>
                    <div
                      onMouseOver={() => {
                        setShowReact(post._id);
                      }}
                      className="flex md:h-10 h-8 items-center hover:bg-slate-200 lg:mx-3 md:mx-2 mx-1 lg:px-9 md:px-4 px-1 rounded-lg"
                    >
                      {post?.reacts.length ? (
                        <div onClick={() => handleRemoveReact(post._id)}>
                          {post?.reacts?.find((r) => r.userId === user.uid) ? (
                            <>
                              {post.reacts.map(
                                (react) =>
                                  react.userId === user.uid && (
                                    <>
                                      <img
                                        className="inline-block md:h-10 h-8 text-base sm:mr-1"
                                        src={react?.reactImg}
                                        alt=""
                                      />
                                      <span
                                        className={`mt-1 mr-3  text-base ${
                                          react.reactName === "Like" &&
                                          "text-blue-700"
                                        } ${
                                          react.reactName === "Love" &&
                                          "text-rose-500"
                                        } ${
                                          react.reactName === "Haha" &&
                                          "text-yellow-400"
                                        } ${
                                          react.reactName === "Sad" &&
                                          "text-yellow-400"
                                        }
                              ${
                                react.reactName === "Wow" && "text-yellow-500"
                              } ${
                                          react.reactName === "Angry" &&
                                          "text-red-700"
                                        }`}
                                      >
                                        {react.reactName}
                                      </span>
                                    </>
                                  )
                              )}
                            </>
                          ) : (
                            <div className="flex items-center">
                              <span>
                                <AiOutlineLike className="inline-block lg:text-2xl md:text-lg text-base sm:mr-1" />
                              </span>
                              <span className="mt-1  text-base  ">Like</span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <span>
                            <AiOutlineLike className="inline-block lg:text-2xl md:text-lg text-base sm:mr-1" />
                          </span>
                          <span className="mt-1  text-base  ">Like</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex md:h-10 h-8 items-center hover:bg-slate-200 lg:mx-3 md:mx-2 mx-1 lg:px-7 md:px-4 px-2 rounded-lg">
                    <span>
                      <BiComment className="inline-block  md:text-lg text-base sm:mr-1" />
                    </span>
                    <span className="mt-1  text-base ">Commnent</span>
                  </div>
                  <div className="flex items-center md:h-10 h-8 hover:bg-slate-200 lg:mx-3 md:mx-2 mx-1 lg:px-9 md:px-4 px-2 rounded-lg">
                    <span>
                      <RiShareForwardLine className="inline-block  md:text-lg text-base sm:mr-1" />
                    </span>
                    <span className="mt-1  text-base ">Share</span>
                  </div>
                </div>
                <div className="border-b border-gray-500 pt-1"></div>
                <Comments id={post._id} comments={post?.comments} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="pt-4">No post available on feed...</p>
      )}
    </div>
  );
};

export default Post;

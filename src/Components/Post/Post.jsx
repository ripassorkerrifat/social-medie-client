import React, { useState } from "react";
import {
  BsThreeDots,
  BsSuitHeartFill,
  BsFillEmojiAngryFill,
} from "react-icons/bs";
import { BiWorld, BiComment } from "react-icons/bi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { Posts } from "../../data";
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

const Post = () => {
  const [btnClicked, setBtnClicked] = useState(false);
  const [currentReact, setCurrentReact] = useState(null);
  const [currentReactName, setCurrentReactName] = useState("");

  const reactData = [
    { name: "Like", img: like1, id: "1" },
    { name: "Love", img: love1, id: "2" },
    { name: "Haha", img: laughing1, id: "3" },
    { name: "Wow", img: wow1, id: "4" },
    { name: "Sad", img: sad1, id: "5" },
    { name: "Angry", img: angry1, id: "6" },
  ];

  return (
    <div onClick={() => btnClicked === true && setBtnClicked(false)}>
      <div className="post-container">
        {Posts.map((post, i) => (
          <div
            key={i}
            className="post-wrapper border rounded shadow-lg my-6 mt-10"
          >
            <div className="post-top my-3 px-2 flex justify-between items-center">
              <div className="flex items-center align-middle">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://pixlr.com/images/index/collage.webp"
                  alt=""
                />
                <div className="ml-3 leading-3">
                  <h4 className="mb-2 font-semibold">Ripas Sorker Rifat</h4>
                  <p>
                    3 hours
                    <span>
                      <BiWorld className="inline-block ml-1" />
                    </span>
                  </p>
                </div>
              </div>
              <BsThreeDots className="inline-block text-2xl mr-2" />
            </div>
            <div className="post-center">
              <p className="px-2">
                Instantly translate sentences and look up words on website. Free
                online translator enhanced by dictionary definitions,
                pronunciations, synonyms, examples and supporting the 19
                languages most used on the web
              </p>
              <img
                className="md:max-h-[500px] h-[350] w-full bg-cover"
                src="https://pixlr.com/images/index/collage.webp"
                alt=""
              />
            </div>
            <div className="post-bottom py-2 md:px-4 px-1 relative">
              <div className="flex justify-between align-middle">
                <div className="flex">
                  <div className="bg-blue-500 rounded-full flex justify-center items-center  w-5 h-5">
                    {/* <love className="inline-block text-white text-xs" /> */}
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
                  <span className="ml-2">You and 25 others</span>
                </div>
                <p>4 comments</p>
              </div>
              <div className="absolute md:top-0 top-7 left-0 ">
                <div
                  className={`flex rounded-3xl border border-gray-300 bg-white md:h-12 h-10 ${
                    btnClicked ? "block" : "hidden"
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
                          setCurrentReact(data.img);
                          setCurrentReactName(data.name);
                        }}
                      />
                    </figure>
                  ))}
                </div>
              </div>
              <div className="border-b border-gray-500 pt-3"></div>
              <div className="flex justify-between items-center pt-1">
                <div
                  onClick={() => setBtnClicked(true)}
                  className="flex md:h-10 h-8 items-center hover:bg-slate-200 lg:mx-3 md:mx-2 mx-1 lg:px-9 md:px-4 px-1 rounded-lg"
                >
                  {currentReact ? (
                    <>
                      <img
                        className="inline-block md:h-10 h-8 text-base sm:mr-1"
                        src={currentReact}
                        alt=""
                      />
                      {currentReactName && (
                        <span
                          className={`mt-1 mr-3  text-base ${
                            currentReactName === "Like" && "text-blue-700"
                          } ${currentReactName === "Love" && "text-rose-500"} ${
                            currentReactName === "Haha" && "text-yellow-400"
                          } ${currentReactName === "Sad" && "text-yellow-400"}
                          ${currentReactName === "Wow" && "text-yellow-500"} ${
                            currentReactName === "Angry" && "text-red-700"
                          }`}
                        >
                          {currentReactName}
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      <span>
                        <AiOutlineLike className="inline-block lg:text-2xl md:text-lg text-base sm:mr-1" />
                      </span>
                      <span className="mt-1  text-base ">Like</span>
                    </>
                  )}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;

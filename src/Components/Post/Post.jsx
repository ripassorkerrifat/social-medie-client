import React from "react";
import {
  BsThreeDots,
  BsSuitHeartFill,
  BsFillEmojiAngryFill,
} from "react-icons/bs";
import { BiWorld, BiComment } from "react-icons/bi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { Posts } from "../../data";

const Post = () => {
  return (
    <div>
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
                className="md:h-[400px] h-[350] w-full bg-cover"
                src="https://pixlr.com/images/index/collage.webp"
                alt=""
              />
            </div>
            <div className="post-bottom py-2 md:px-4 px-1">
              <div className="flex justify-between align-middle">
                <div className="flex">
                  <p className="bg-blue-500 rounded-full flex justify-center items-center  w-5 h-5">
                    <AiFillLike className="inline-block text-white text-xs" />
                  </p>
                  <p className="bg-rose-500 rounded-full flex justify-center items-center 1 w-5 h-5">
                    <BsSuitHeartFill className="inline-block text-white text-xs " />
                  </p>
                  <p className="bg-red-800 rounded-full flex justify-center items-center  w-5 h-5">
                    <BsFillEmojiAngryFill className="inline-block text-white text-xs " />
                  </p>{" "}
                  <span className="ml-2">You and 25 others</span>
                </div>
                <p>4 comments</p>
              </div>
              <div className="border-b border-gray-500 pt-3"></div>
              <div className="flex justify-between items-center pt-2">
                <div className="flex items-center hover:bg-slate-200 lg:mx-3 md:mx-2 mx-1 lg:px-9 md:px-4 px-2 rounded-lg">
                  <span>
                    <AiOutlineLike className="inline-block lg:text-2xl md:text-lg text-base sm:mr-1" />
                  </span>
                  <span className="mt-1 lg:text-lg text-base md:font-semibold">
                    {" "}
                    Like
                  </span>
                </div>
                <div className="flex items-center hover:bg-slate-200 lg:mx-3 md:mx-2 mx-1 lg:px-7 md:px-4 px-2 rounded-lg">
                  <span>
                    <BiComment className="inline-block lg:text-2xl md:text-lg text-base sm:mr-1" />
                  </span>
                  <span className="mt-1 lg:text-lg text-base md:font-semibold">
                    Commnent
                  </span>
                </div>
                <div className="flex items-center hover:bg-slate-200 lg:mx-3 md:mx-2 mx-1 lg:px-9 md:px-4 px-2 rounded-lg">
                  <span>
                    <RiShareForwardLine className="inline-block lg:text-2xl md:text-lg text-base sm:mr-1" />
                  </span>
                  <span className="mt-1 lg:text-lg text-base md:font-semibold">
                    Share
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;

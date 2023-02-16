import React, { useContext, useState } from "react";
import { BsMessenger } from "react-icons/bs";
import { FcAcceptDatabase } from "react-icons/fc";
import { MdDelete, MdOutlineCancel, MdPersonAdd } from "react-icons/md";
import { useLocation } from "react-router-dom";
import {
  useAcceptRequestMutation,
  useAddFriendMutation,
  useCancleRequestMutation,
  useDeleteFriendMutation,
  useGetUserByEmailQuery,
} from "../../../app/fetures/userApi/userSlice";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import Chat from "../../Chat/Chat";

const OtherProfileTop = ({ data }) => {
  const [oppositeUserEmail, setOppositeUserEmail] = useState("");

  const { user } = useContext(AuthContext);
  const { data: currentUser } = useGetUserByEmailQuery(user?.email);

  const location = useLocation();
  const pathname = location.pathname;
  const email = pathname.split("/")[2];

  const [addFriend] = useAddFriendMutation();
  const [cancleReq] = useCancleRequestMutation();
  const [accpetReq] = useAcceptRequestMutation();
  const [deleteFrn] = useDeleteFriendMutation();

  const isFriend = currentUser?.friends?.find((u) => u?.email === data?.email);

  const isFollowers = currentUser?.followers?.find(
    (u) => u?.email === data?.email
  );
  const isFollowing = currentUser?.following?.find(
    (u) => u?.email === data?.email
  );

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;
  let currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const handleAddFriend = (receiverId) => {
    const sender = {
      name: currentUser?.name,
      email: currentUser?.email,
      id: currentUser?._id,
      profileImg: currentUser?.profileImg,
      receiverId,
      currentDate,
      currentTime,
    };
    addFriend(sender);
  };

  const handleCancleRequest = (receiverId) => {
    const sender = {
      name: currentUser?.name,
      email: currentUser?.email,
      id: currentUser?._id,
      profileImg: currentUser?.profileImg,
      receiverId,
    };
    cancleReq(sender);
  };

  const handleAcceptRequest = (receiverId) => {
    const sender = {
      name: currentUser?.name,
      email: currentUser?.email,
      id: currentUser?._id,
      profileImg: currentUser?.profileImg,
      receiverId,
    };
    accpetReq(sender);
  };
  const handleDeleteFriend = (receiverId) => {
    const sender = {
      name: currentUser?.name,
      email: currentUser?.email,
      id: currentUser?._id,
      profileImg: currentUser?.profileImg,
      receiverId,
    };
    deleteFrn(sender);
  };

  return (
    <div>
      <div className="profile-top-container border-b-2">
        {/* profile top cover photo  */}
        <div className="relative">
          {data?.coverImg ? (
            <img
              className="w-full lg:h-[350px] md:h-[300px] h-[200px] rounded-md"
              src={data.coverImg}
              alt=""
            />
          ) : (
            <div className="relative bg-gray-800 lg:h-[350px] md:h-[300px] h-[200px] flex justify-center items-center">
              <h4 className="text-[#ff059b] text-center font-semibold lg:text-5xl md:text-3xl">
                No cover photo uploaded...
              </h4>
            </div>
          )}
        </div>
        {/* profile bottom profile edit/add/main section*/}
        <div className="my-4  lg:mx-10 md:flex justify-between items-center">
          <div className="md:flex items-center relative ">
            {data?.profileImg ? (
              <img
                className="lg:h-28 lg:w-28 md:h-24 md:w-24 w-14 h-14 rounded-full"
                src={data?.profileImg}
                alt=""
              />
            ) : (
              <img
                className="lg:h-28 lg:w-28 md:h-24 md:w-24 w-14 h-14 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA7r1pd3h80Lq9uOByb2ALq5FoOAe-Mq0j3_EZzmOo4tXO0CUkRHQrbXMruyClSGA87E&usqp=CAU"
                alt=""
              />
            )}

            <div className="md:ml-3 ml-1  leading-5">
              <h4 className="lg:text-2xl md:text-xl w-full text-base font-semibold mt-3">
                {data?.name}
              </h4>
              <span>{data?.designation}</span>
            </div>
          </div>
          <div className="text-end inline-block">
            {isFollowers || isFollowing || isFriend ? (
              <></>
            ) : (
              <>
                {email !== currentUser?.email && (
                  <>
                    <label
                      htmlFor="chat-modal"
                      onClick={() => setOppositeUserEmail(data.email)}
                      className="inline-flex  bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm md:px-4 
          md:py-[6px] px-1 py-1 md:mr-4 rounded-md md:mt-0 mt-2  mr-2 "
                    >
                      <BsMessenger className="inline-block md:text-xl text-lg mr-1" />{" "}
                      Message
                    </label>
                    <button
                      onClick={() => handleAddFriend(data._id)}
                      className="inline-flex bg-[#ff059b]  text-gray-200 text-sm md:px-4 px-1 py-1 md:mt-2 md:py-[6px] md:mr-4 rounded-md  mr-2"
                    >
                      <MdPersonAdd className="inline-block md:text-xl text-lg  " />{" "}
                      Add Friend
                    </button>
                  </>
                )}
              </>
            )}

            {isFriend && email !== currentUser?.email ? (
              <>
                <label
                  htmlFor="chat-modal"
                  onClick={() => setOppositeUserEmail(data.email)}
                  className="inline-flex  bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm md:px-4 
          md:py-[6px] px-1 py-1 md:mr-4 rounded-md md:mt-0 mt-2  mr-2 "
                >
                  <BsMessenger className="inline-block md:text-xl text-lg mr-1" />{" "}
                  Message
                </label>
                <button
                  onClick={() => handleDeleteFriend(data._id)}
                  className="inline-flex bg-[#ff059b]  text-gray-200 text-sm md:px-4 px-1 py-1 md:mt-2 md:py-[6px] md:mr-4 rounded-md mr-2"
                >
                  <MdDelete className="inline-block md:text-xl text-lg  " />
                  Delete Friend
                </button>
              </>
            ) : (
              <></>
            )}
            {isFollowing && (
              <>
                <label
                  htmlFor="chat-modal"
                  onClick={() => setOppositeUserEmail(data.email)}
                  className="inline-flex  bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm md:px-4 
          md:py-[6px] px-1 py-1 md:mr-4 rounded-md md:mt-0 mt-2  mr-2 "
                >
                  <BsMessenger className="inline-block md:text-xl text-lg mr-1" />{" "}
                  Message
                </label>

                <button
                  onClick={() => handleCancleRequest(data._id)}
                  className="inline-flex bg-[#ff059b]  text-gray-200 text-sm md:px-4 px-1 py-1 md:mt-2 md:py-[6px] md:mr-4 rounded-md mr-2"
                >
                  <MdOutlineCancel className="inline-block md:text-xl text-lg  " />
                  Cancel
                </button>
              </>
            )}
            {isFollowers && (
              <>
                <label
                  htmlFor="chat-modal"
                  onClick={() => setOppositeUserEmail(data.email)}
                  className="inline-flex  bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm md:px-4 
          md:py-[6px] px-1 py-1 md:mr-4 rounded-md md:mt-0 mt-2  mr-2 "
                >
                  <BsMessenger className="inline-block md:text-xl text-lg mr-1" />{" "}
                  Message
                </label>
                <button
                  onClick={() => handleAcceptRequest(data._id)}
                  className="inline-flex bg-[#ff059b]  text-gray-200 text-sm md:px-4 px-1 py-1 md:mt-2 md:py-[6px] md:mr-4 rounded-md mr-2"
                >
                  <FcAcceptDatabase className="inline-block md:text-xl text-lg  " />
                  Accept
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {oppositeUserEmail && (
        <Chat
          oppositeUserEmail={oppositeUserEmail}
          setOppositeUserEmail={setOppositeUserEmail}
        />
      )}
    </div>
  );
};

export default OtherProfileTop;

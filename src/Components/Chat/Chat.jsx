import React, { useContext, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { FaPhotoVideo } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { useGetUserByEmailQuery } from "../../app/fetures/userApi/userSlice";
import Loader from "../Spiner/Loader";
import rifat from "../../assets/me/rifat.jpg";

const Chat = ({ oppositeUserEmail, setOppositeUserEmail }) => {
  const { user } = useContext(AuthContext);

  const { data: oppositeUser, isLoading } =
    useGetUserByEmailQuery(oppositeUserEmail);
  const { data: currentUser } = useGetUserByEmailQuery(user?.email);

  // console.log(oppositeUser);
  // console.log(currentUser);

  const [messageText, setMessageText] = useState("");

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;
  let currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    const messageInfo = {
      messageText,
      currentUserEmail: currentUser.email,
      oppositeEmail: oppositeUserEmail,
      currentDate,
      currentTime,
    };

    console.log(messageInfo);

    setMessageText("");
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <input type="checkbox" id="chat-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative max-w-[450px] ">
          <div className=" flex max-h-[450px]  flex-col border rounded  w-full">
            {/* chat top start */}
            <div className="flex  items-center justify-between border-b p-1 px-2">
              <div className=" flex items-center py-2 px-1 rounded">
                <div className="relative">
                  {oppositeUser?.profileImg ? (
                    <img
                      className="h-11 w-11 rounded-full border-2 border-[#ff059b]"
                      src={oppositeUser?.profileImg}
                      alt=""
                    />
                  ) : (
                    <img
                      className="h-11 w-11 rounded-full border-2 border-[#ff059b]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA7r1pd3h80Lq9uOByb2ALq5FoOAe-Mq0j3_EZzmOo4tXO0CUkRHQrbXMruyClSGA87E&usqp=CAU"
                      alt=""
                    />
                  )}
                  <GoPrimitiveDot className="text-gray-600 bg-gray-600 h-3 w-3 border border-white  rounded-full bg inline-block absolute bottom-[2px] right-0" />
                </div>
                <div className="ml-2 leading-4">
                  <h4 className="font-semibold ">{oppositeUser?.name}</h4>
                  <p>Online</p>
                </div>
              </div>

              <div>
                <label
                  htmlFor="chat-modal"
                  onClick={() => setOppositeUserEmail("")}
                  className="inline-flex bg-gray-300 rounded-full p-1"
                  type="button"
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
              </div>
            </div>
            {/* chat top end */}

            {/* message  */}

            <div className="flex-1 px-4 py-4 overflow-y-auto">
              {/* opsosite text start */}
              <div className="flex items-center mb-4">
                <div className="flex-none flex flex-col space-y-1 mr-4">
                  {user.profileImg ? (
                    <img
                      className="h-10 w-10 rounded-full border-2 border-[#ff059b]"
                      src={oppositeUser?.profileImg}
                      alt=""
                    />
                  ) : (
                    <img
                      className="h-10 w-10 rounded-full border-2 border-[#ff059b]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA7r1pd3h80Lq9uOByb2ALq5FoOAe-Mq0j3_EZzmOo4tXO0CUkRHQrbXMruyClSGA87E&usqp=CAU"
                      alt=""
                    />
                  )}
                </div>
                <div className="flex-1 bg-gray-300 p-2 rounded-lg mb-2 relative">
                  <div>
                    Hei! Why didn't you implement real time chat system...
                  </div>

                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-gray-300"></div>
                </div>
              </div>
              {/* opsosite text end */}

              {/* my text start */}
              <div className="flex items-center flex-row-reverse mb-4">
                <div className="flex-none flex flex-col space-y-1 ml-4">
                  <img
                    className="h-10 w-10 rounded-full border-2 border-[#ff059b]"
                    src={rifat}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-[#ff059b] text-gray-100 p-2 rounded-lg mb-2 relative">
                  <div>
                    I have not implemented the real-time chat system as it has
                    some deployment-related issues. Deploying it requires a
                    premium website, so I didn't implement it. But I can
                    implement it.
                  </div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-[#ff059b]"></div>
                </div>
              </div>
              {/* my text end */}
              {/* opsosite text start */}
              <div className="flex items-center mb-4">
                <div className="flex-none flex flex-col space-y-1 mr-4">
                  {user.profileImg ? (
                    <img
                      className="h-10 w-10 rounded-full border-2 border-[#ff059b]"
                      src={oppositeUser?.profileImg}
                      alt=""
                    />
                  ) : (
                    <img
                      className="h-10 w-10 rounded-full border-2 border-[#ff059b]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA7r1pd3h80Lq9uOByb2ALq5FoOAe-Mq0j3_EZzmOo4tXO0CUkRHQrbXMruyClSGA87E&usqp=CAU"
                      alt=""
                    />
                  )}
                </div>
                <div className="flex-1 bg-gray-300 p-2 rounded-lg mb-2 relative">
                  <div>Ohhh.. Okay man.....</div>

                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-gray-300"></div>
                </div>
              </div>
              {/* opsosite text end */}

              {/* my text start */}
              <div className="flex items-center flex-row-reverse mb-4">
                <div className="flex-none flex flex-col space-y-1 ml-4">
                  <img
                    className="h-10 w-10 rounded-full border-2 border-[#ff059b]"
                    src={rifat}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-[#ff059b] text-gray-100 p-2 rounded-lg mb-2 relative">
                  <div>Yeah! Thank you,,,,,</div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-[#ff059b]"></div>
                </div>
              </div>
              {/* my text end */}
            </div>

            {/* bottom section  */}
            <div className="flex items-center border-t p-2">
              <div className="flex items-baseline">
                <button className="inline-flex bg-[#ff059b] rounded-full p-1.5 text-gray-100 mr-1">
                  <AiFillPlusCircle size={17} />
                </button>
                <button className="inline-flex bg-[#ff059b] rounded-full p-1.5 text-gray-100 mr-1">
                  <FaPhotoVideo size={17} />
                </button>
                <button className="inline-flex bg-[#ff059b] rounded-full p-1.5 text-gray-100 ">
                  <BsFillEmojiLaughingFill size={17} />
                </button>
              </div>

              <form
                onSubmit={handleSubmitMessage}
                className="flex justify-between items-center"
              >
                <div className="w-full mx-1">
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    required
                    className=" w-[200px] form-control block rounded-2xl  px-[10px] py-[4px] font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:outline-none
        "
                    placeholder="Type here......"
                  />
                </div>

                <button
                  className="inline-flex items-center bg-slate-300  rounded-xl px-1.5 py-1 "
                  type="submit"
                >
                  Send
                  <FiSend size={17} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

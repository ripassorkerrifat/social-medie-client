import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { FaPhotoVideo } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

const Chat = () => {
  return (
    <div>
      <input type="checkbox" id="chat-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative max-w-[450px] ">
          <div class=" flex max-h-[450px]  flex-col border rounded  w-full">
            {/* chat top start */}
            <div class="flex  items-center justify-between border-b p-1 px-2">
              <div className=" flex items-center py-2 px-1 rounded">
                <div className="relative">
                  <img
                    className="h-11 w-11 rounded-full border-2 border-[#ff059b]"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dk4UI8851PK6MaEJ8rwcKzfhNdYqEkZmvGv8wLRUSbtqmg23Fsi2NvZ6VL51ehm5WIU&usqp=CAU"
                    alt=""
                  />
                  <GoPrimitiveDot className="text-green-600 bg-green-600 h-3 w-3 border border-white  rounded-full bg inline-block absolute bottom-[2px] right-0" />
                </div>
                <div className="ml-2 leading-4">
                  <h4 className="font-semibold ">Ripas Sorker Rifat</h4>
                  <p>Online</p>
                </div>
              </div>

              <div>
                <label
                  htmlFor="chat-modal"
                  class="inline-flex bg-gray-300 rounded-full p-1"
                  type="button"
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
              </div>
            </div>
            {/* chat top end */}

            {/* message  */}

            <div class="flex-1 px-4 py-4 overflow-y-auto">
              {/* opsosite text start */}
              <div class="flex items-center mb-4">
                <div class="flex-none flex flex-col space-y-1 mr-4">
                  <img
                    className="h-10 w-10 rounded-full border-2 border-[#ff059b]"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dk4UI8851PK6MaEJ8rwcKzfhNdYqEkZmvGv8wLRUSbtqmg23Fsi2NvZ6VL51ehm5WIU&usqp=CAU"
                    alt=""
                  />
                </div>
                <div class="flex-1 bg-gray-300 p-2 rounded-lg mb-2 relative">
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </div>

                  <div class="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-gray-300"></div>
                </div>
              </div>
              {/* opsosite text end */}

              {/* my text start */}
              <div class="flex items-center flex-row-reverse mb-4">
                <div class="flex-none flex flex-col space-y-1 ml-4">
                  <img
                    class="h-10 w-10 rounded-full border-2 border-[#ff059b]"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="flex-1 bg-[#ff059b] text-gray-100 p-2 rounded-lg mb-2 relative">
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </div>
                  <div class="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-[#ff059b]"></div>
                </div>
              </div>
              {/* my text end */}
              {/* opsosite text start */}
              <div class="flex items-center mb-4">
                <div class="flex-none flex flex-col space-y-1 mr-4">
                  <img
                    className="h-10 w-10 rounded-full border-2 border-[#ff059b]"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dk4UI8851PK6MaEJ8rwcKzfhNdYqEkZmvGv8wLRUSbtqmg23Fsi2NvZ6VL51ehm5WIU&usqp=CAU"
                    alt=""
                  />
                </div>
                <div class="flex-1 bg-gray-300 p-2 rounded-lg mb-2 relative">
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </div>

                  <div class="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-gray-300"></div>
                </div>
              </div>
              {/* opsosite text end */}

              {/* my text start */}
              <div class="flex items-center flex-row-reverse mb-4">
                <div class="flex-none flex flex-col space-y-1 ml-4">
                  <img
                    class="h-10 w-10 rounded-full border-2 border-[#ff059b]"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="flex-1 bg-[#ff059b] text-gray-100 p-2 rounded-lg mb-2 relative">
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </div>
                  <div class="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-[#ff059b]"></div>
                </div>
              </div>
              {/* my text end */}
            </div>

            {/* bottom section  */}
            <div class="flex items-center border-t p-2">
              <div className="flex items-baseline">
                <button class="inline-flex bg-[#ff059b] rounded-full p-1.5 text-gray-100 mr-1">
                  <AiFillPlusCircle size={17} />
                </button>
                <button class="inline-flex bg-[#ff059b] rounded-full p-1.5 text-gray-100 mr-1">
                  <FaPhotoVideo size={17} />
                </button>
                <button class="inline-flex bg-[#ff059b] rounded-full p-1.5 text-gray-100 ">
                  <BsFillEmojiLaughingFill size={17} />
                </button>
              </div>

              <div class="w-full mx-1">
                <input
                  type="text"
                  className=" form-control block rounded-2xl w-full px-[6px] py-[4px] font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:outline-none
        "
                  placeholder="Type here......"
                />
              </div>

              <button
                class="inline-flex items-center bg-slate-300  rounded-xl px-1.5 py-1 "
                type="button"
              >
                Send
                <FiSend size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

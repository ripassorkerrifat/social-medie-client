import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { Usersonline } from "../../data";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

const ChatBox = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold inline-block border-b-2">Chatbox</h4>
      {/* slider  */}
      <div className="mt-4">
        <h4 className="font-semibold pb-1 ">Online friends</h4>
        <Swiper
          slidesPerView={6}
          spaceBetween={0}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            300: {
              slidesPerView: 5,
            },
            766: {
              slidesPerView: 6,
            },
          }}
          className="mySwiper"
        >
          {Usersonline.map((user, i) => (
            <SwiperSlide key={i}>
              <label htmlFor="chat-modal" className="relative">
                <img
                  className="h-12 w-12 rounded-full border-2 border-[#ff059b]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dk4UI8851PK6MaEJ8rwcKzfhNdYqEkZmvGv8wLRUSbtqmg23Fsi2NvZ6VL51ehm5WIU&usqp=CAU"
                  alt=""
                />
                <GoPrimitiveDot className="text-green-600 bg-green-600 h-3 w-3 border border-white  rounded-full bg inline-block absolute md:bottom-[2px] md:right-2 bottom-1 right-[5px]" />
              </label>
              <h4 className="text-sm">Rifat...</h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pt-4">
        <h4 className="font-semibold pb-1">Inbox</h4>
        {Usersonline.map((user, i) => (
          <label
            htmlFor="chat-modal"
            key={i}
            className=" flex items-center hover:bg-slate-300 py-2 px-1 rounded"
          >
            <div className="relative">
              <img
                className="h-12 w-12 rounded-full border-2 border-[#ff059b]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dk4UI8851PK6MaEJ8rwcKzfhNdYqEkZmvGv8wLRUSbtqmg23Fsi2NvZ6VL51ehm5WIU&usqp=CAU"
                alt=""
              />
              <GoPrimitiveDot className="text-green-600 bg-green-600 h-3 w-3 border border-white  rounded-full bg inline-block absolute bottom-[2px] right-0" />
            </div>
            <div className="ml-2 leading-4">
              <h4 className="font-semibold ">{user.name}</h4>
              <p>Lorem ipsum dolor sit.....</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ChatBox;

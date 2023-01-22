import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { Usersonline } from "../../data";

const Online = () => {
  return (
    <div>
      <h1 className="font-semibold text-lg">Online Friend </h1>
      {Usersonline.map((user, i) => (
        <div
          key={i}
          className=" flex items-center hover:bg-slate-300 py-2 px-1 rounded"
        >
          <div className="relative">
            <img
              className="h-11 w-11 rounded-full border-2 border-[#ff059b]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dk4UI8851PK6MaEJ8rwcKzfhNdYqEkZmvGv8wLRUSbtqmg23Fsi2NvZ6VL51ehm5WIU&usqp=CAU"
              alt=""
            />
            <GoPrimitiveDot className="text-green-600 bg-green-600 h-3 w-3 border border-white  rounded-full bg inline-block absolute bottom-[2px] right-0" />
          </div>
          <h4 className="font-semibold ml-2">{user.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Online;

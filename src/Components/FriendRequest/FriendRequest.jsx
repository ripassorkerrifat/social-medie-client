import React from "react";
import { Users } from "../../data";

const FriendRequest = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h5 className="text-gray-800 font-semibold text-lg">Freind Request</h5>
        <p className="text-[#ff059b]">See all</p>
      </div>
      {Users.map((user, i) => (
        <div className="py-2 px-1 hover:bg-slate-300 rounded-md">
          <div className="flex justify-between">
            <div className="flex">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.news18.com/ibnlive/uploads/2021/02/1612707348_tiger.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normalz"
                alt=""
              />
              <div className="ml-3">
                <p className="font-semibold">Ripas Sorker</p>
                <div className="text-xs flex items-center">
                  <img
                    className="w-4 h-4 rounded-full mr-2"
                    src="https://images.news18.com/ibnlive/uploads/2021/02/1612707348_tiger.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normalz"
                    alt=""
                  />
                  <p>1 mutual feirnd</p>
                </div>
              </div>
            </div>
            <p>5h</p>
          </div>
          <div className="pt-1 flex justify-end">
            <button className="bg-[#ff059b] text-gray-100 text-sm px-4 py-[6px] mr-4 rounded-md inline-block">
              Confirm
            </button>
            <button className="bg-gray-400 text-gray-800 text-sm px-4 py-[6px] mr-4 rounded-md inline-block">
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default FriendRequest;

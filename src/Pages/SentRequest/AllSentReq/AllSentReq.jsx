import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  useCancleRequestMutation,
  useGetUserByEmailQuery,
} from "../../../app/fetures/userApi/userSlice";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const AllSentReq = () => {
  const { user } = useContext(AuthContext);
  const { data: currentUser } = useGetUserByEmailQuery(user?.email);
  const [cancleReq, { isError }] = useCancleRequestMutation();

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

  if (isError) {
    return <p>Some thing went wrong...</p>;
  }

  return (
    <div className="bg-white flex-1 p-5  overflow-y-auto h-[100vh]">
      <h4 className="text-xl font-semibold mt-11">Sent Request</h4>
      <div className="grid lg:grid-cols-4 md:grid-cols-2  mt-3 lg:gap-10 md:gap-8 gap-6">
        {currentUser?.following?.length ? (
          <>
            {currentUser?.following?.map((friend) => (
              <div className="rounded-xl border-2 overflow-hidden">
                <div>
                  {friend?.profileImg ? (
                    <Link to={`/profile/${friend?.email}`}>
                      <img
                        className="max-h-[240px] w-full"
                        src={friend.profileImg}
                        alt=""
                      />
                    </Link>
                  ) : (
                    <Link to={`/profile/${friend?.email}`}>
                      <img
                        className="max-h-[240px] w-full"
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                        alt=""
                      />
                    </Link>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="text-xl mb-2">{friend?.name}</h4>

                  <button
                    onClick={() => handleCancleRequest(friend.id)}
                    className="bg-[#ff059b] w-full text-gray-100 text-sm px-2 py-[6px] mr-2 rounded-md inline-block"
                  >
                    Cancel request
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className=" md:ext-lg text-base col-span-3">
            No sent request available......
          </p>
        )}
      </div>
    </div>
  );
};

export default AllSentReq;

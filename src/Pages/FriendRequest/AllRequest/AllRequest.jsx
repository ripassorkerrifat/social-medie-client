import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  useAcceptRequestMutation,
  useDeleteRequestMutation,
  useGetUserByEmailQuery,
} from "../../../app/fetures/userApi/userSlice";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const AllRequest = () => {
  const { user } = useContext(AuthContext);
  const { data: currentUser, isError } = useGetUserByEmailQuery(user?.email);

  const [requestAccept] = useAcceptRequestMutation();
  const [deleteReq] = useDeleteRequestMutation();

  const handleAcceptRequest = (receiverId) => {
    const sender = {
      name: currentUser?.name,
      email: currentUser?.email,
      id: currentUser?._id,
      profileImg: currentUser?.profileImg,
      receiverId,
    };
    requestAccept(sender);
  };
  const handleDeleteRequest = (receiverId) => {
    const sender = {
      name: currentUser?.name,
      email: currentUser?.email,
      id: currentUser?._id,
      profileImg: currentUser?.profileImg,
      receiverId,
    };
    deleteReq(sender);
  };

  if (isError) {
    return <p>Some think went wrong.....</p>;
  }

  return (
    <div className="bg-white flex-1 p-5  overflow-y-auto h-[100vh]">
      <h4 className="text-xl font-semibold mt-11">Friends Request</h4>
      <div className="grid lg:grid-cols-4 md:grid-cols-2  mt-3 lg:gap-10 md:gap-8 gap-6">
        {currentUser?.followers?.length ? (
          <>
            {currentUser?.followers
              ?.slice(0)
              ?.reverse()
              ?.map((friend, i) => (
                <div key={i} className="rounded-xl border-2 overflow-hidden">
                  <div>
                    {friend?.profileImg ? (
                      <Link to={`/profile/${friend?.email}`}>
                        <img
                          className="h-[200px] w-full"
                          src={friend.profileImg}
                          alt=""
                        />
                      </Link>
                    ) : (
                      <Link to={`/profile/${friend?.email}`}>
                        <img
                          className="h-[200px] w-full"
                          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                          alt=""
                        />
                      </Link>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl mb-2">{friend?.name}</h4>
                    <button
                      onClick={() => handleAcceptRequest(friend.id)}
                      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[#a624d1] w-full text-gray-100 text-sm px-2 py-[6px] mr-2 rounded-md inline-block"
                    >
                      Accept request
                    </button>
                    <button
                      onClick={() => handleDeleteRequest(friend.id)}
                      className="bg-gray-400 w-full mt-2 text-gray-800 text-sm px-2 py-[6px] mr-2 rounded-md inline-block"
                    >
                      Delete request
                    </button>
                  </div>
                </div>
              ))}
          </>
        ) : (
          <p className=" md:text-lg w-full col-span-3">
            No friends request available ......
          </p>
        )}
      </div>
    </div>
  );
};

export default AllRequest;

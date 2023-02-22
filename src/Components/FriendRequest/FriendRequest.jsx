import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TimeAgo from "timeago-react";
import {
  useAcceptRequestMutation,
  useDeleteRequestMutation,
  useGetUserByEmailQuery,
} from "../../app/fetures/userApi/userSlice";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const FriendRequest = () => {
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
    <>
      {currentUser?.followers?.length ? (
        <>
          <div className="flex justify-between">
            <h4 className="font-semibold pl-2 text-lg">Friend request</h4>
            {currentUser?.followers?.length > 4 && (
              <Link to={"/all-req"}>
                <p className="mr-1 text-[#a624d1]">See all</p>
              </Link>
            )}
          </div>
          {currentUser?.followers
            ?.slice(0)
            ?.reverse()
            .slice(0, 3)
            ?.map((user, i) => (
              <div key={i} className="py-2 px-1 hover:bg-slate-300 rounded-md">
                <div className="flex justify-between">
                  <div className="flex">
                    {user?.profileImg ? (
                      <Link to={`/profile/${user?.email}`}>
                        <img
                          className="h-12 w-12 rounded-full"
                          src={user?.profileImg}
                          alt=""
                        />
                      </Link>
                    ) : (
                      <Link to={`/profile/${user?.email}`}>
                        <img
                          className="h-12 w-12 rounded-full"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA7r1pd3h80Lq9uOByb2ALq5FoOAe-Mq0j3_EZzmOo4tXO0CUkRHQrbXMruyClSGA87E&usqp=CAU"
                          alt=""
                        />
                      </Link>
                    )}

                    <div className="ml-3">
                      <Link to={`/profile/${user?.email}`}>
                        <p className="font-semibold">{user.name}</p>
                      </Link>

                      <div className="text-xs flex items-center">
                        <img
                          className="w-4 h-4 rounded-full mr-2"
                          src="https://images.news18.com/ibnlive/uploads/2021/02/1612707348_tiger.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normalz"
                          alt=""
                        />
                        <p>1 mutual </p>
                      </div>
                    </div>
                  </div>
                  <p>
                    <TimeAgo
                      datetime={`${user.currentDate} ${""} ${user.currentTime}`}
                    ></TimeAgo>
                  </p>
                </div>
                <div className="pt-1 flex justify-end">
                  <button
                    onClick={() => handleAcceptRequest(user?.id)}
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[#a624d1] text-gray-100 text-sm px-4 py-[6px] mr-4 rounded-md inline-block"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => handleDeleteRequest(user.id)}
                    className="bg-gray-400 text-gray-800 text-sm px-4 py-[6px] mr-4 rounded-md inline-block"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default FriendRequest;

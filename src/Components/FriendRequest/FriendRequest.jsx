import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
          <h5 className="text-gray-800 font-semibold text-lg">
            Freind Request
          </h5>
          {currentUser?.followers?.slice(0, 3)?.map((user, i) => (
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
                      <p>1 mutual friend</p>
                    </div>
                  </div>
                </div>
                <p>5h</p>
              </div>
              <div className="pt-1 flex justify-end">
                <button
                  onClick={() => handleAcceptRequest(user?.id)}
                  className="bg-[#ff059b] text-gray-100 text-sm px-4 py-[6px] mr-4 rounded-md inline-block"
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

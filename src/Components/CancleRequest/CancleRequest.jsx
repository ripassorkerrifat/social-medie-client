import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TimeAgo from "timeago-react";
import {
  useCancleRequestMutation,
  useGetUserByEmailQuery,
} from "../../app/fetures/userApi/userSlice";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const CancleRequest = () => {
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
    <>
      <h5 className="text-gray-800 font-semibold text-lg">Sent Request</h5>
      {currentUser?.requests?.length ? (
        <>
          {currentUser?.requests?.map((user, i) => (
            <div key={i} className="py-2 px-1 hover:bg-slate-300 rounded-md">
              <div className="flex justify-between">
                <div className="flex">
                  {user?.profileImg ? (
                    <Link to={`/profile/${user.email}`}>
                      <img
                        className="lg:h-12 lg:w-12 h-10 w-10 rounded-full"
                        src={user?.profileImg}
                        alt=""
                      />
                    </Link>
                  ) : (
                    <Link to={`/profile/${user.email}`}>
                      <img
                        className="lg:h-12 lg:w-12 h-10 w-10 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA7r1pd3h80Lq9uOByb2ALq5FoOAe-Mq0j3_EZzmOo4tXO0CUkRHQrbXMruyClSGA87E&usqp=CAU"
                        alt=""
                      />
                    </Link>
                  )}

                  <div className="ml-3">
                    <Link to={`/profile/${user.email}`}>
                      <p className="text-base font-semibold hover:underline">
                        {user?.name?.length > 20
                          ? `${user?.name.slice(0, 20)}...`
                          : user.name}
                      </p>
                    </Link>
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
                <p>
                  {" "}
                  <TimeAgo
                    datetime={`${user.currentDate} ${""} ${user.currentTime}`}
                  />
                </p>
              </div>
              <div className="p flex justify-end">
                <button
                  onClick={() => handleCancleRequest(user.id)}
                  className="bg-[#ff059b] text-gray-100 text-sm px-4 py-[6px] mr-4 rounded-md inline-block"
                >
                  Cancle
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="pt-1 text-center">No requested...</p>
      )}
    </>
  );
};

export default CancleRequest;

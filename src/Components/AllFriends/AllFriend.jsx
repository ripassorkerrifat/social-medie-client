import React from "react";
import { Link } from "react-router-dom";

const AllFriend = ({ data }) => {
  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold">Friends</h4>

      {data?.friends.length ? (
        <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-3 gap-1 mt-2 lg:text-base text-sm">
          {data?.friends?.map((d, i) => (
            <div key={i}>
              {d?.profileImg ? (
                <Link to={`/profile/${d.email}`}>
                  <img
                    className="rounded-md max-h-20 w-full"
                    src={d.profileImg}
                    alt=""
                  />
                </Link>
              ) : (
                <Link to={`/profile/${d.email}`}>
                  <img
                    className="rounded-md max-h-20 w-full "
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    alt=""
                  />
                </Link>
              )}

              <h5>
                {d.name.length > 10 ? `${d.name.slice(0, 10)}....` : d.name}{" "}
              </h5>
            </div>
          ))}
        </div>
      ) : (
        <p className="py-1 ">No friends available</p>
      )}
      <hr className="border-b pageHr border-gray-400 mt-5 opacity-60" />
    </div>
  );
};

export default AllFriend;

import React, { useEffect, useState } from "react";

const Foloower = ({ data, posts }) => {
  const [followers, setFollowers] = useState(0);

  console.log(data);

  const follower = data?.friends?.length;
  const friend = data?.friends?.length;
  console.log(follower);
  console.log(friend);

  useEffect(() => {
    if (follower > 1 && friend > 1) {
      console.log("dukce");
      const result = follower + friend;
      setFollowers(result);
    } else if (follower) {
      setFollowers(follower);
    } else if (friend) {
      setFollowers(friend);
    } else {
      return setFollowers(0);
    }
  }, [follower, friend]);

  return (
    <div>
      <div className="grid grid-cols-3 md:p-8 p-5">
        <div className="flex flex-col justify-center items-center md:px-7 px-4">
          <p>{followers}</p>
          <h4>Followers</h4>
        </div>
        <div className="flex flex-col justify-center items-center md:px-7 px-4 border-l-2 border-r-2">
          <p>{data?.friends?.length ? `${data?.friends?.length}` : 0}</p>
          <h4>Friends</h4>
        </div>
        <div className="flex flex-col justify-center items-center md:px-7 px-4">
          <p>{posts?.length ? `${posts.length}` : 0}</p>
          <h4>Posts</h4>
        </div>
      </div>
      <div className="border-b-2 mb-6"></div>
    </div>
  );
};

export default Foloower;

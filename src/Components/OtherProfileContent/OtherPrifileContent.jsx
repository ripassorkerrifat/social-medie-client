import React from "react";
import { useLocation } from "react-router-dom";
import { useGetPostByEmailQuery } from "../../app/fetures/postApi/postSlice";
import { useGetUserByEmailQuery } from "../../app/fetures/userApi/userSlice";
import AllFriend from "../AllFriends/AllFriend";
import AllPhotos from "../AllPhotos/AllPhotos";
import Post from "../Post/Post";
import Loader from "../Spiner/Loader";
import OtherpersonalInfo from "./OtherPersonalInfo/OtherpersonalInfo";
import "./otherProfile.css";
import OtherProfileTop from "./OtherProfileTop/OtherProfileTop";

const OtherPrifileContent = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const email = pathname.split("/")[2];

  const { data: posts, isError, isLoading } = useGetPostByEmailQuery(email);
  const { data } = useGetUserByEmailQuery(email);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="profile-content-container">
      {/* <div className=" mt-8  md:pt-5"> */}
      <div className="grid md:grid-cols-3 gap-5 mt-7  md:pt-5 px-5">
        <div className="md:col-span-2 md:sticky md:h-screen post-section">
          <div className="m-1">
            <OtherProfileTop data={data} />
          </div>
          <Post posts={posts} isError={isError} />
        </div>
        <div className="col-span-1 sticky h-screen personal-info p-4 bg-[#f1f1f1] hidden sm:block">
          <OtherpersonalInfo data={data} />
          <AllPhotos posts={posts} />
          <AllFriend />
        </div>
      </div>
    </div>
  );
};

export default OtherPrifileContent;

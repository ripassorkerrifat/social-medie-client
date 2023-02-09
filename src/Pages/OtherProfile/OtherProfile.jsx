import React from "react";
import { useLocation } from "react-router-dom";
import { useGetPostByEmailQuery } from "../../app/fetures/postApi/postSlice";
import { useGetUserByEmailQuery } from "../../app/fetures/userApi/userSlice";
import OtherProfileMiddle from "../../Components/OtherProfileContent/OtherProfileMiddle/OtherProfileMiddle";
import OtherProfileRight from "../../Components/OtherProfileContent/OtherProfileRight/OtherProfileRight";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Loader from "../../Components/Spiner/Loader";

const OtherProfile = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const email = pathname.split("/")[2];

  const { data: posts, isError, isLoading } = useGetPostByEmailQuery(email);
  const { data } = useGetUserByEmailQuery(email);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex align-middle w-full bg-[#f1f1f1]">
      <Sidebar />
      <OtherProfileMiddle posts={posts} isError={isError} data={data} />
      <OtherProfileRight data={data} posts={posts} />
    </div>
  );
};

export default OtherProfile;

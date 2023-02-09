import React, { useContext } from "react";
import { useGetPostByEmailQuery } from "../../app/fetures/postApi/postSlice";
import { useGetUserByEmailQuery } from "../../app/fetures/userApi/userSlice";
import ProfileMiddle from "../../Components/ProfileMiddle/ProfileMiddle";
import ProfileRight from "../../Components/ProfileRight/ProfileRight";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Loader from "../../Components/Spiner/Loader";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import "./profile.css";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const {
    data: posts,
    isError,
    isLoading,
  } = useGetPostByEmailQuery(user?.email);
  const { data } = useGetUserByEmailQuery(user?.email);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="profileContainer">
        <Sidebar />
        <ProfileMiddle posts={posts} isError={isError} data={data} />
        <ProfileRight data={data} posts={posts} />
      </div>
    </>
  );
};

export default Profile;

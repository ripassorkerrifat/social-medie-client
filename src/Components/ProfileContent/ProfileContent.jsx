import React, { useContext } from "react";
import { useGetPostByEmailQuery } from "../../app/fetures/postApi/postSlice";
import { useGetUserByEmailQuery } from "../../app/fetures/userApi/userSlice";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import AllFriend from "../AllFriends/AllFriend";
import AllPhotos from "../AllPhotos/AllPhotos";
import CreatePost from "../CreatePost/CreatePost";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Post from "../Post/Post";
import ProfileTop from "../ProfileTop/ProfileTop";
import Loader from "../Spiner/Loader";
import "./content.css";

const ProfileContent = () => {
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
    <div className="profile-content-container">
      <div className=" mt-8 px-5 md:pt-5">
        <ProfileTop data={data} />
        <div className="grid md:grid-cols-3 gap-5 mt-7">
          <div className="md:col-span-2 md:sticky md:h-screen post-section">
            <div className="m-1">
              <CreatePost />
            </div>
            <Post posts={posts} isError={isError} />
          </div>
          <div className="col-span-1 sticky h-screen personal-info p-4 bg-[#f1f1f1] hidden sm:block">
            <PersonalInfo data={data} />
            <AllPhotos />
            <AllFriend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;

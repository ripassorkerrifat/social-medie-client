import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useAddFriendMutation,
  useGetAllUserQuery,
  useGetUserByEmailQuery,
} from "../../app/fetures/userApi/userSlice";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const AddFriend = () => {
  const [restPeople, setRestPeople] = useState([]);
  const { user } = useContext(AuthContext);
  const { data: users, isError, isLoading } = useGetAllUserQuery();

  const [addfriend] = useAddFriendMutation();

  const otherPeople = users?.filter((u) => u.email !== user?.email);
  const { data: currentUser } = useGetUserByEmailQuery(user.email);

  const friends = currentUser?.friends;
  const following = currentUser?.following;
  const followers = currentUser?.followers;

  useEffect(() => {
    if (followers?.length && following?.length && friends?.length) {
      const restPeopleByFollowing = otherPeople?.filter(
        ({ _id: id1 }) => !following?.some(({ id: id2 }) => id2 === id1)
      );
      const restPeopleByFollowers = restPeopleByFollowing?.filter(
        ({ _id: id1 }) => !followers?.some(({ id: id2 }) => id2 === id1)
      );
      const restPeopleByFriends = restPeopleByFollowers?.filter(
        ({ _id: id1 }) => !friends?.some(({ id: id2 }) => id2 === id1)
      );
      setRestPeople(restPeopleByFriends);
    } else if (following?.length && friends?.length) {
      const restPeopleByFollowing = otherPeople?.filter(
        ({ _id: id1 }) => !following?.some(({ id: id2 }) => id2 === id1)
      );
      const restPeopleByFriends = restPeopleByFollowing?.filter(
        ({ _id: id1 }) => !friends?.some(({ id: id2 }) => id2 === id1)
      );
      setRestPeople(restPeopleByFriends);
    } else if (followers?.length && friends?.length) {
      const restPeopleByFollowers = otherPeople?.filter(
        ({ _id: id1 }) => !followers?.some(({ id: id2 }) => id2 === id1)
      );
      const restPeopleByFriends = restPeopleByFollowers?.filter(
        ({ _id: id1 }) => !friends?.some(({ id: id2 }) => id2 === id1)
      );
      setRestPeople(restPeopleByFriends);
    } else if (followers?.length) {
      const restPeopleByFollowers = otherPeople?.filter(
        ({ _id: id1 }) => !followers?.some(({ id: id2 }) => id2 === id1)
      );
      setRestPeople(restPeopleByFollowers);
    } else if (friends?.length) {
      const restPeopleByFriends = otherPeople?.filter(
        ({ _id: id1 }) => !friends?.some(({ id: id2 }) => id2 === id1)
      );
      setRestPeople(restPeopleByFriends);
    } else if (following?.length) {
      const restPeopleByFollowing = otherPeople?.filter(
        ({ _id: id1 }) => !following?.some(({ id: id2 }) => id2 === id1)
      );
      setRestPeople(restPeopleByFollowing);
    } else {
      setRestPeople(otherPeople);
    }
  }, [following, followers, friends]);

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;
  let currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const handleAddFriend = (receiverId) => {
    const sender = {
      name: currentUser?.name,
      email: currentUser?.email,
      id: currentUser?._id,
      profileImg: currentUser?.profileImg,
      receiverId,
      currentDate,
      currentTime,
    };
    addfriend(sender);
  };

  if (isLoading) {
    return;
  }
  if (isError) {
    return <p>Something went wrong...</p>;
  }

  return (
    <div className="mt-6">
      <hr className="border-b border-gray-400 my-5 opacity-60" />
      <h4 className="font-semibold pl-2 text-lg">Peoples you may know</h4>
      {restPeople?.map((user, i) => (
        <div key={i} className="py-4 px-1 hover:bg-slate-300 rounded-md">
          <div className="flex justify-between items-center">
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
                    src={user?.profileImg}
                    alt=""
                  />
                  <p>1 mutual friend</p>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleAddFriend(user?._id)}
                className="bg-[#ff059b] text-gray-100 text-sm px-2 py-[6px] mr-2 rounded-md inline-block"
              >
                Add friend
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* {otherPeaople?.map((user, i) => (
        <div key={i} className="py-4 px-1 hover:bg-slate-300 rounded-md">
          <div className="flex justify-between items-center">
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
                    src={user?.profileImg}
                    alt=""
                  />
                  <p>1 mutual friend</p>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleAddFriend(user?._id)}
                className="bg-[#ff059b] text-gray-100 text-sm px-2 py-[6px] mr-2 rounded-md inline-block"
              >
                Add friend
              </button>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default AddFriend;

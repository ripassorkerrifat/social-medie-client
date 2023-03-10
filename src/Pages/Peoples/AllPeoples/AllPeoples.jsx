import React, { useContext, useEffect, useState } from "react";
import {
   useAddFriendMutation,
   useGetAllUserQuery,
   useGetUserByEmailQuery,
} from "../../../app/fetures/userApi/userSlice";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const AllPeoples = () => {
   const { user } = useContext(AuthContext);
   const [restPeople, setRestPeople] = useState([]);

   const { data: users, isError, isLoading } = useGetAllUserQuery();

   const [addfriend, { isLoading: addLoading }] = useAddFriendMutation();

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
      <div className="bg-white flex-1 md:p-5 p-3 overflow-y-auto h-[100vh]">
         <h4 className="text-xl font-semibold mt-11">Peoples you know may</h4>
         <div className="grid lg:grid-cols-4 md:grid-cols-2  mt-3 lg:gap-10 md:gap-8 gap-6">
            {restPeople?.length ? (
               <>
                  {restPeople
                     ?.slice(0)
                     ?.reverse()
                     ?.map((friend, i) => (
                        <div
                           key={i}
                           className="rounded-xl border-2 overflow-hidden"
                        >
                           <div>
                              {friend?.profileImg ? (
                                 <Link to={`/profile/${friend?.email}`}>
                                    <img
                                       className="h-[200px] w-full"
                                       src={friend.profileImg}
                                       alt=""
                                    />
                                 </Link>
                              ) : (
                                 <Link to={`/profile/${friend?.email}`}>
                                    <img
                                       className="h-[200px] w-full"
                                       src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                                       alt=""
                                    />
                                 </Link>
                              )}
                           </div>
                           <div className="p-4">
                              <h4 className="text-xl mb-2">{friend?.name}</h4>
                              <button
                                 disabled={addLoading}
                                 onClick={() => handleAddFriend(friend._id)}
                                 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[#a624d1] w-full text-gray-100 text-sm px-2 py-[6px] mr-2 rounded-md inline-block"
                              >
                                 Add friend
                              </button>
                           </div>
                        </div>
                     ))}
               </>
            ) : (
               <p className=" lg:text-lg ">No peoples available</p>
            )}
         </div>
      </div>
   );
};

export default AllPeoples;

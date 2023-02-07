import React, { useContext } from "react";

import TimeAgo from "timeago-react";
import { useAddCommentMutation } from "../../app/fetures/postApi/postSlice";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Comments = ({ id, comments }) => {
  const { user } = useContext(AuthContext);

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;
  let currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const [addComment] = useAddCommentMutation();

  const handleComment = (e) => {
    e.preventDefault();
    const commtentText = e.target.comment.value;
    const comment = {
      commenter: user?.displayName,
      commenterPhoto: user?.photoURL,
      currentDate,
      currentTime,
      comment: commtentText,
      id,
    };
    addComment(comment);

    e.target.reset();
  };

  return (
    <div className="my-3">
      <div>
        <form
          onSubmit={handleComment}
          className="flex items-center justify-between p-1"
        >
          {user.photoURL ? (
            <img
              src={user?.photoURL}
              className="h-10 w-10 rounded-full inline-block"
              alt=""
            />
          ) : (
            <img
              className="h-10 w-10 rounded-full inline-block"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA7r1pd3h80Lq9uOByb2ALq5FoOAe-Mq0j3_EZzmOo4tXO0CUkRHQrbXMruyClSGA87E&usqp=CAU"
              alt=""
            />
          )}

          <div className="lg:w-[470px] ml-3 md:w-[370px] sm:w-[310px] w-[280px] relative">
            <input
              type="text"
              name="comment"
              className="inline-block w-full form-control rounded-2xl  px-[6px] py-[4px] font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:outline-none"
              placeholder="Type here......"
              required
            />
          </div>

          <button
            type="submit"
            className="inline-block items-center bg-slate-300  rounded-lg px-3 py-1 ml-2"
          >
            Submit
          </button>
        </form>
        {comments?.map(
          (
            { commenterPhoto, commenter, comment, currentDate, currentTime },
            i
          ) => (
            <div className="mt-2 flex" key={i}>
              {commenterPhoto ? (
                <img
                  src={commenterPhoto}
                  className="h-10 w-10 rounded-full inline-block ml-1"
                  alt=""
                />
              ) : (
                <img
                  className="h-10 w-10 rounded-full inline-block ml-1"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA7r1pd3h80Lq9uOByb2ALq5FoOAe-Mq0j3_EZzmOo4tXO0CUkRHQrbXMruyClSGA87E&usqp=CAU"
                  alt=""
                />
              )}

              <div className="leading-4 ml-3">
                <div className="bg-slate-200 inline-block p-2 rounded-lg">
                  <h4 className="font-semibold hover:underline">{commenter}</h4>
                  <p>{comment}.</p>
                </div>
                <div className="text-sm flex w-[250px]">
                  <p className="mr-2 font-semibold underline">Like</p>
                  <p className="mr-2 font-semibold underline">Reply</p>
                  <p className="mr-2 font-semibold">
                    <TimeAgo datetime={`${currentDate} ${""} ${currentTime}`} />
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Comments;

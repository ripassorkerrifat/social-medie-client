import React from "react";
import Foloower from "../../Followers/Foloower";
import Post from "../../Post/Post";
import OtherProfileTop from "../OtherProfileTop/OtherProfileTop";
import "./otherProfileMiddle.css";

const OtherProfileMiddle = ({ data, posts, isError }) => {
   return (
      <div className="feedContainer">
         <div className="md:p-5 p-3 mt-11">
            <OtherProfileTop data={data} />
            <Foloower posts={posts} data={data} />
            <Post posts={posts} isError={isError} />
         </div>
      </div>
   );
};

export default OtherProfileMiddle;

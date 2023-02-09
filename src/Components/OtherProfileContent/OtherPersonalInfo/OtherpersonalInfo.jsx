import React from "react";
import { FaHome } from "react-icons/fa";
import { MdCastForEducation, MdLocationPin } from "react-icons/md";

const OtherpersonalInfo = ({ data }) => {
  return (
    <div>
      <div className="">
        <div className="">
          <h4 className="text-lg font-semibold">Bio</h4>
          {data?.bio ? (
            <p className=" text-base text-gray-800">{data.bio}</p>
          ) : (
            <p className="text-base text-gray-800"> Bio not available </p>
          )}

          <hr className="border-b pageHr border-gray-400 my-2 opacity-60" />
        </div>

        <div>
          <h4 className="text-lg font-semibold">Education</h4>
          <div className="flex mt-2">
            {data?.collage ? (
              <>
                <span>
                  <MdCastForEducation className="inline-block text-gray-800 text-xl lg:text-2xl mr-2" />
                </span>

                <p className="lg:text-base text-sm text-gray-800">
                  {data.collage}
                </p>
              </>
            ) : (
              <p className="text-base text-gray-800">Not added collage </p>
            )}
          </div>
          <div className="flex mt-2">
            {data?.university ? (
              <>
                <span>
                  <MdCastForEducation className="inline-block text-gray-800 text-xl lg:text-2xl mr-2" />
                </span>

                <p className="lg:text-base text-sm text-gray-800">
                  {data.university}
                </p>
              </>
            ) : (
              <p className="text-base text-gray-800">Not added university </p>
            )}
          </div>
          <hr className="border-b pageHr border-gray-400 my-2 opacity-60" />
        </div>
        <div>
          <h4 className="text-lg font-semibold border-b-2">Location</h4>
          <div className="flex mt-2">
            {data?.currentLocation ? (
              <>
                <span>
                  <FaHome className="inline-block text-gray-800 text-xl lg:text-2xl mr-2" />
                </span>
                <p className="lg:text-base text-sm text-gray-800">
                  {data?.currentLocation}
                </p>
              </>
            ) : (
              <p className="text-base text-gray-800">
                {" "}
                Not given current location{" "}
              </p>
            )}
          </div>
          <div className="flex mt-2">
            {data?.parmanentLocation ? (
              <>
                <span>
                  <MdLocationPin className="inline-block text-gray-800 text-xl lg:text-2xl mr-2" />
                </span>
                <p className="lg:text-base text-sm text-gray-800">
                  {data?.parmanentLocation}
                </p>
              </>
            ) : (
              <p className="text-base text-gray-800">
                Not given parmanent location...
              </p>
            )}
          </div>
        </div>
      </div>

      <hr className="border-b pageHr border-gray-400 mt-5 opacity-60" />
    </div>
  );
};

export default OtherpersonalInfo;

import React from "react";
import { MdCastForEducation, MdLocationPin } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import ProfileEditModal from "../ProfileEditModal/ProfileEditModal";
import { useState } from "react";

const PersonalInfo = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="">
        <div className="">
          <h4 className="text-lg font-semibold">Bio</h4>
          {data?.bio ? (
            <p className=" text-base text-gray-800">{data.bio}</p>
          ) : (
            <p className="text-base text-gray-800">Add bio </p>
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
              <p className="text-base text-gray-800">Add collage </p>
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
              <p className="text-base text-gray-800">Add university </p>
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
              <p className="text-base text-gray-800"> Add current location </p>
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
                {" "}
                Add parmanent location{" "}
              </p>
            )}
          </div>
        </div>
        {/* The button to open modal */}
        <label
          htmlFor="profile-edit-modal"
          onClick={() => setOpenModal(true)}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[#a624d1]  text-center w-full mt-3 text-gray-200 text-sm px-4 py-[6px] mr-4 rounded-md inline-block "
        >
          Add/Edit Info
        </label>
      </div>

      <hr className="border-b pageHr border-gray-400 mt-5 opacity-60" />
      {openModal && (
        <ProfileEditModal data={data} setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

export default PersonalInfo;

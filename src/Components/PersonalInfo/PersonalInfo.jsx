import React from "react";
import { MdCastForEducation, MdLocationPin } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import ProfileEditModal from "../ProfileEditModal/ProfileEditModal";
import { useState } from "react";

const PersonalInfo = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="">
        <div className="">
          <h4 className="text-lg font-semibold">Bio</h4>
          <p className="text-center text-base text-gray-800">
            "লা ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসুলুল্লাহ (সাঃ)
          </p>
          <p className="text-base text-gray-800">No bio available</p>
          <hr className="border-b pageHr border-gray-400 my-2 opacity-60" />
        </div>

        <div>
          <h4 className="text-lg font-semibold">Education</h4>
          <div className="flex mt-2">
            <span>
              <MdCastForEducation className="inline-block text-gray-800 text-xl lg:text-2xl mr-2" />
            </span>
            <p className="lg:text-base text-sm text-gray-800">
              Studied at B.Sc in Computer Science & Engineering (CSE) Department
              at Dhaka International University
            </p>
          </div>
          <div className="flex mt-2">
            <span>
              <MdCastForEducation className="inline-block text-gray-800 text-xl lg:text-2xl mr-2" />
            </span>
            <p className="lg:text-base text-sm text-gray-800">
              Studied at M R Govt College Panchagarh
            </p>
          </div>
          <hr className="border-b pageHr border-gray-400 my-2 opacity-60" />
        </div>
        <div>
          <h4 className="text-lg font-semibold border-b-2">Location</h4>
          <div className="flex mt-2">
            <span>
              <FaHome className="inline-block text-gray-800 text-xl lg:text-2xl mr-2" />
            </span>
            <p className="lg:text-base text-sm text-gray-800">
              Lives in Dhaka, Bangladesh
            </p>
          </div>
          <div className="flex mt-2">
            <span>
              <MdLocationPin className="inline-block text-gray-800 text-xl lg:text-2xl mr-2" />
            </span>
            <p className="lg:text-base text-sm text-gray-800">
              From Panchagarh, Rājshāhi, Bangladesh
            </p>
          </div>
        </div>
        {/* The button to open modal */}
        <label
          htmlFor="profile-edit-modal"
          onClick={() => setOpenModal(true)}
          className="bg-[#ff059b]  text-center w-full mt-3 text-gray-200 text-sm px-4 py-[6px] mr-4 rounded-md inline-block "
        >
          Add/Edit Info
        </label>
      </div>

      <hr className="border-b pageHr border-gray-400 mt-5 opacity-60" />
      {openModal && <ProfileEditModal setOpenModal={setOpenModal} />}
    </div>
  );
};

export default PersonalInfo;

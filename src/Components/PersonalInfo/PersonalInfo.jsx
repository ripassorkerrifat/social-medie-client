import React from "react";
import { MdCastForEducation, MdLocationPin } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const PersonalInfo = () => {
  return (
    <div className="pt-3">
      <h4 className="text-lg font-semibold">Intro</h4>
      <div className="pt-2 pb-2">
        <p className="text-center text-base text-gray-800">
          "লা ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসুলুল্লাহ (সাঃ)
        </p>
        <button className="bg-[#ff059b]  w-full mt-3 text-gray-200 text-sm px-4 py-[6px] mr-4 rounded-md inline-block ">
          Edit Bio
        </button>
      </div>
      <div className=" mt-3">
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

        <button className="bg-[#ff059b]  w-full mt-3 text-gray-200 text-sm px-4 py-[6px] mr-4 rounded-md inline-block ">
          Edit Bio
        </button>
      </div>

      <hr className="border-b pageHr border-gray-400 mt-5 opacity-60" />
    </div>
  );
};

export default PersonalInfo;

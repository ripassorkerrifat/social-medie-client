import React from "react";
import rifat from "../../assets/me/rifat.jpg";
import resume from "../../assets/me/resume.pdf";

const DeveloperInfo = () => {
  return (
    <div>
      <h1 className="font-semibold text-lg">Developer Info</h1>
      <img className="h-64 w-full" src={rifat} alt="" />
      <h4 className="text-lg font-semibold mt-3">Ripas Sorker Rifat</h4>
      <h4 className="my-2">
        MERN Stack Developer || Frontend Developer || Full Stack Developer
      </h4>
      <a
        href={resume}
        download
        className="bg-[#ff059b] w-full text-center text-gray-100 text-sm px-3 py-[6px] mr-2 rounded-md inline-block mb-4"
      >
        Get Resume
      </a>
    </div>
  );
};

export default DeveloperInfo;

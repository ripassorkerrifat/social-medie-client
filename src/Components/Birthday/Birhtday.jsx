import React from "react";
import gift from "../../assets/birthdaygifts/gift.png";

const Birhtday = () => {
  return (
    <div className="my-3">
      <h5 className="font-semibold text-lg">Birthday</h5>
      <div className="flex items-center hover:bg-slate-300 py-2 px-1 rounded">
        <img className="h-12 w-12 rounded-md" src={gift} alt="" />
        <p className="leading-4 ml-2">
          <b>Sohanur Rahaman</b> and <b>5 other</b> have birthday today!!
        </p>
      </div>
    </div>
  );
};

export default Birhtday;

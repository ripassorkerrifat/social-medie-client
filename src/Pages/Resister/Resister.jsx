import React from "react";
import "./resister.css";

const Resister = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="box">
        <div className="form">
          <h2>Sign in </h2>
          <div className="inputbox">
            <input type="text" required="required" />
            <span>Username </span>
            <i></i>
          </div>

          <div className="inputbox">
            <input type="password" required="required" />
            <span>Password</span>
            <i></i>
          </div>

          <div className="text-sm text-[#8f8f8f] my-3 text-end hover:text-[#ff059b]">
            <a href="/"> Forgot Password</a>
          </div>
          <input type="submit" value="Login" />
        </div>
      </div>
    </div>
  );
};

export default Resister;

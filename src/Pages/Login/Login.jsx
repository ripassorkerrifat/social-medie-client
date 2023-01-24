import React from "react";
import { useState } from "react";
import "./login.css";

const Login = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="from-container ">
      <div className="wrapper">
        <div className="title-text ">
          <div className={`title login ${toggle ? "ml-0" : "-ml-[50%]"}`}>
            Social Media
          </div>
          <div className="title signup">Social Media</div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login" />
            <input type="radio" name="slide" id="signup" />
            <label
              onClick={() => {
                setToggle(true);
              }}
              htmlFor="login"
              className="slide login"
            >
              Login
            </label>
            <label
              onClick={() => {
                setToggle(false);
              }}
              htmlFor="signup"
              className="slide signup"
            >
              Sign Up
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            <form
              action="#"
              className={`login ${toggle ? "ml-0" : "-ml-[50%]"}`}
            >
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="pass-link">
                <a href="/">Forgot password?</a>
              </div>
              <div className="field btn2">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
            </form>
            <form action="#" className="signup">
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                />
              </div>
              <div className="field btn2">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

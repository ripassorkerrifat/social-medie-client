import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginSchema, resistationSchema } from "../../schemas";
import "./login.css";

const Login = () => {
  const [toggle, setToggle] = useState(true);

  const initialResisterValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const initialLoginValues = {
    email: "",
    password: "",
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialResisterValues,
    validationSchema: resistationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const loginFrom = useFormik({
    initialValues: initialLoginValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(loginFrom.values);
    },
  });

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
              onSubmit={loginFrom.handleSubmit}
              className={`login ${toggle ? "ml-0" : "-ml-[50%]"}`}
            >
              <div className="field">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={loginFrom.values.email}
                  onChange={loginFrom.handleChange}
                  onBlur={loginFrom.handleBlur}
                />
              </div>
              <p className="text-red-600">{loginFrom.errors.email}</p>

              <div className="field">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginFrom.values.password}
                  onChange={loginFrom.handleChange}
                  onBlur={loginFrom.handleBlur}
                />
              </div>
              <p className="text-red-600">{loginFrom.errors.password}</p>
              <div className="pass-link">
                <Link>Forgot password?</Link>
              </div>
              <div className="field btn2">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <p className="pt-2 text-gray-800">
                If you don't have any account ? Please SIgn Up frist.
              </p>
            </form>
            <form onSubmit={handleSubmit} className="signup">
              <div className="field">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <p className="text-red-600">{errors.name}</p>
              <div className="field">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <p className="text-red-600">{errors.email}</p>
              <div className="field">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <p className="text-red-600">{errors.password}</p>
              <div className="field">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <p className="text-red-600">{errors.confirmPassword}</p>
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

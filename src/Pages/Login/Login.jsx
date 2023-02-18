import { useFormik } from "formik";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { saveUserAndsetToken } from "../../Api/auth";

import SmallSpiner from "../../Components/Spiner/SmallSpiner";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { loginSchema, resistationSchema } from "../../schemas";
import "./login.css";

const Login = () => {
  const [toggle, setToggle] = useState(true);
  const {
    login,
    loading,
    setLoading,
    createUser,
    // verifyEmail,
    updateUserProfile,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialResisterValues,
      validationSchema: resistationSchema,
      onSubmit: (values, action) => {
        const { name, email, password } = values;
        createUser(email, password)
          .then((result) => {
            const user = result.user;
            saveUserAndsetToken(user);
            action.resetForm();
            navigate("/");
            updateUserProfile(name)
              .then((data) => {
                saveUserAndsetToken(user);
                setLoading(false);

                toast.success("Created user succesfully..!!");
                // verifyEmail()
                //   .then(() => {
                //     toast.success(
                //       "Please check your email, verify request sended..!!"
                //     );
                //     setLoading(false);
                //   })
                //   .catch((err) => {
                //     toast.error(err.message);
                //     setLoading(false);
                //   });
              })
              .catch((err) => {
                toast.error(err.message);
                setLoading(false);
              });
          })
          .catch((err) => {
            toast.error(err.message);
            setLoading(false);
          });
      },
    });

  const loginFrom = useFormik({
    initialValues: initialLoginValues,
    validationSchema: loginSchema,
    onSubmit: (values, action) => {
      const { email, password } = values;
      login(email, password)
        .then((result) => {
          const user = result.user;
          saveUserAndsetToken(user);
          action.resetForm();
          setLoading(false);
          navigate(from, { replace: true });
          toast.success("Login succesfully..!!");
        })
        .catch((err) => {
          toast.error(err.message);
          setLoading(false);
        });
    },
  });

  return (
    <div className="from-container ">
      <div className="wrapper">
        <div className="title-text ">
          <div className={`title login ${toggle ? "ml-0" : "-ml-[50%]"}`}>
            R<span className="text-gray-400">S</span>R Media
          </div>
          <div className="title signup">
            R<span className="text-gray-400">S</span>R Media
          </div>
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
              <div
                className={`field ${
                  loginFrom.errors.email && loginFrom.touched.email
                    ? "tooltip tooltip-top  tooltip-open "
                    : ""
                } `}
                data-tip={`${loginFrom.errors.email}`}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={loginFrom.values.email}
                  onChange={loginFrom.handleChange}
                  onBlur={loginFrom.handleBlur}
                />
              </div>

              <div
                className={`field ${
                  loginFrom.errors.password && loginFrom.touched.password
                    ? "tooltip tooltip-top  tooltip-open "
                    : ""
                } `}
                data-tip={`${loginFrom.errors.password}`}
              >
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginFrom.values.password}
                  onChange={loginFrom.handleChange}
                  onBlur={loginFrom.handleBlur}
                />
              </div>

              <div className="pass-link">
                <Link>Forgot password?</Link>
              </div>
              <div className="field btn2">
                <div className="btn-layer"></div>
                <button type="submit">
                  {loading ? <SmallSpiner /> : <span>Login</span>}
                </button>
              </div>
              <p className="pt-2 text-gray-800">
                If you don't have any account ? Please SIgn Up frist.
              </p>
            </form>
            <form onSubmit={handleSubmit} className="signup">
              <div
                className={`field ${
                  errors.name && touched.name
                    ? "tooltip tooltip-top  tooltip-open "
                    : ""
                } `}
                data-tip={`${errors.name}`}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div
                className={`field ${
                  errors.email && touched.email
                    ? "tooltip tooltip-top  tooltip-open "
                    : ""
                } `}
                data-tip={`${errors.email}`}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div
                className={`field ${
                  errors.password && touched.password
                    ? "tooltip tooltip-top  tooltip-open "
                    : ""
                } `}
                data-tip={`${errors.password}`}
              >
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div
                className={`field ${
                  errors.confirmPassword && touched.confirmPassword
                    ? "tooltip tooltip-top  tooltip-open "
                    : ""
                } `}
                data-tip={`${errors.confirmPassword}`}
              >
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div className="field btn2">
                <div className="btn-layer"></div>
                <button type="submit">
                  {loading ? <SmallSpiner /> : <span>Signup</span>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

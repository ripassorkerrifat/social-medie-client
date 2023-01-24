import React from "react";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Resister from "./Pages/Resister/Resister";

const App = () => {
  return (
    <div className=" flex flex-col justify-between bg-grdi">
      {/* <Home /> */}
      {/* <Profile /> */}
      <Login />
      {/* <Resister /> */}
    </div>
  );
};

export default App;

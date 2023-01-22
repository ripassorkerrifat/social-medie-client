import React from "react";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";

const App = () => {
  return (
    <div className=" flex flex-col justify-between bg-grdi">
      {/* <Home /> */}
      <Profile />
    </div>
  );
};

export default App;

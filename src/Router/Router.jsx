import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import AllFriendRequest from "../Pages/FriendRequest/AllFriendRequest";
import Friends from "../Pages/Friends/Friends";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import OtherProfile from "../Pages/OtherProfile/OtherProfile";
import Peoples from "../Pages/Peoples/Peoples";
import Profile from "../Pages/Profile/Profile";
import SentRequest from "../Pages/SentRequest/SentRequest";
import PrivetRouter from "./PrivetRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivetRouter>
        <HomeLayout />
      </PrivetRouter>
    ),
    children: [
      {
        path: "/",
        element: (
          <PrivetRouter>
            <Home />
          </PrivetRouter>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivetRouter>
            <Profile />
          </PrivetRouter>
        ),
      },
      {
        path: "/profile/:id",
        element: (
          <PrivetRouter>
            <OtherProfile />
          </PrivetRouter>
        ),
      },
      {
        path: "/friends",
        element: (
          <PrivetRouter>
            <Friends />
          </PrivetRouter>
        ),
      },
      {
        path: "/peoples",
        element: (
          <PrivetRouter>
            <Peoples />
          </PrivetRouter>
        ),
      },
      {
        path: "/all-req",
        element: (
          <PrivetRouter>
            <AllFriendRequest />
          </PrivetRouter>
        ),
      },
      {
        path: "/sent-req",
        element: (
          <PrivetRouter>
            <SentRequest />
          </PrivetRouter>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
]);

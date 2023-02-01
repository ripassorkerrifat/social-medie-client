import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
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
        path: "/profile",
        element: (
          <PrivetRouter>
            <Profile />
          </PrivetRouter>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
]);

import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";

import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/Singnup/Signup";
import Home from "../Pages/Home/Home/Home";
import FaqPage from "../Pages/Home/Faq/FaqPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/faq",
        element: <FaqPage></FaqPage>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

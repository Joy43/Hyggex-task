import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";

import Errorpage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/Singnup/Signup";
import Home from "../Pages/Home/Home/Home";
import FaqPage from "../Pages/Home/Faq/FaqPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Errorpage></Errorpage>,
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
    ],
  },
  // {
  //   path: "dashboard",
  //   element: (
  //     <PrivateRoute>
  //       <SidebarDeshboad></SidebarDeshboad>
  //     </PrivateRoute>
  //   ),
  //   children: [
  //     {
  //       path: "dashboard/manageitem",
  //       element: <DnsManage></DnsManage>,
  //     },
  //     {
  //       path: "product",
  //       element: <Products></Products>,
  //     },
  //     {
  //       path: "dashboard/addItems",
  //       element: <AddItems></AddItems>,
  //     },

  //     {
  //       path: "updateItem/:id",
  //       element: <UpdateItem></UpdateItem>,
  //       loader: ({ params }) =>
  //         fetch(`https://dns-sever.vercel.app/product/${params.id}`),
  //     },
  //   ],
  // },
]);

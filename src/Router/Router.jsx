import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/UsersPages/Home";
import Petlisting from "../Pages/UsersPages/Petlisting";
import Donation from "../Pages/UsersPages/Donation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/petlisting",
        element: <Petlisting></Petlisting>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
    ],
  },
]);

export default router;

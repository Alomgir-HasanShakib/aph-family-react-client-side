import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/UsersPages/Home";
import Petlisting from "../Pages/UsersPages/Petlisting";
import Donation from "../Pages/UsersPages/Donation";
import Login from "../Shared/Authenticaiton/Login";
import Registration from "../Shared/Authenticaiton/Registration";
import Dashboard from "../Layout/Dashboard";
import AddPet from "../Pages/UsersPages/Dashboard/AddPet";
import AdoptRequest from "../Pages/UsersPages/Dashboard/AdoptRequest";
import CreateDonation from "../Pages/UsersPages/Dashboard/CreateDonation";
import MyAddedPet from "../Pages/UsersPages/Dashboard/MyAddedPet";
import MydonationCampaign from "../Pages/UsersPages/Dashboard/MydonationCampaign";
import Mydonation from "../Pages/UsersPages/Dashboard/Mydonation";
import Error from "../Pages/ErrorPages/Error";
import UpdatePets from "../Pages/UsersPages/Dashboard/UpdatePets";
import PetDetails from "../Pages/UsersPages/PetDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateDonation from "../Pages/UsersPages/Dashboard/UpdateDonation";
import DonationDetails from "../Pages/UsersPages/DonationDetails";
import AllUsers from "../Pages/AdminPages/AllUsers";
import AdminRoute from "./AdminRoute";
import AllPets from "../Pages/AdminPages/AllPets";
import AllDonators from "../Pages/AdminPages/AllDonators";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
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
      {
        path: "/donationDetails/:id",
        element: <DonationDetails></DonationDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/campaigns/${params.id}`),
      },
      {
        path: "/petdetails/:id",
        element: (
          <PrivateRoute>
            <PetDetails></PetDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/pets/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: "addpet",
        element: <AddPet></AddPet>,
      },
      {
        path: "adoptrequest",
        element: <AdoptRequest></AdoptRequest>,
      },
      {
        path: "updatePet/:id",
        element: <UpdatePets></UpdatePets>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/pets/${params.id}`),
      },
      {
        path: "updateCampaign/:id",
        element: <UpdateDonation></UpdateDonation>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/campaigns/${params.id}`),
      },
      {
        path: "donationcampaign",
        element: <CreateDonation></CreateDonation>,
      },
      {
        path: "myaddedpet",
        element: <MyAddedPet></MyAddedPet>,
      },
      {
        path: "mycampaign",
        element: <MydonationCampaign></MydonationCampaign>,
      },
      {
        path: "mydonation",
        element: <Mydonation></Mydonation>,
      },
      // ======================================admin route here=================================================
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "allpets",
        element: (
          <AdminRoute>
            <AllPets></AllPets>
          </AdminRoute>
        ),
      },
      {
        path: "alldonators",
        element: (
          <AdminRoute>
            <AllDonators></AllDonators>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;

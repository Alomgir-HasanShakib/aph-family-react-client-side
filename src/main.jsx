import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import router from "./Router/Router.jsx";
import Authentication from "./Context/authcontext/Authentication.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrimeReactProvider } from "primereact/api";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
      <PrimeReactProvider>
        <Authentication>
          <RouterProvider router={router}></RouterProvider>
        </Authentication>
      </PrimeReactProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

import { Navigate, createBrowserRouter } from "react-router-dom";

import ErrorPage from "../layouts/ErrorPage";
import Home from "../pages/Home/Home/Home";
import DashboardLayout from "../layouts/DashboardLayout";

import App from "../App";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
    //   {
    //     index: true, // Default dashboard route - NOW SHOWS ROLE-BASED DASHBOARD
    //     element: <RoleBasedDashboard />,
    //   },


      // User specific routes


      // Admin specific routes
    //   {
    //     path: "admin", // Keep this route for direct access if needed
    //     element: <AdminDashboard />,
    //   },


      // Seller specific routes
    //   {
    //     path: "seller", // Keep this route for direct access if needed
    //     element: <SellerDashboard />,
    //   },
  
    ],
  },
 
]);

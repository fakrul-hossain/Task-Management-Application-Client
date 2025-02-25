import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout"; // Create a layout for common UI (Navbar/Footer)
import ErrorPage from "../components/ErrorPage";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Task from "../pages/Task";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";
import Error from "../Error/Error";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error />,
    children: [
      { path: '/', 
        element: <Home></Home>
    }, 
      // Home page
      { path: "dashboard", 
        element: <PrivateRoute><Dashboard /></PrivateRoute>
       }, 
      { path: "tasks", 
        element:  <PrivateRoute><Task /> </PrivateRoute>
       }, 
      { path: "login", 
        element: <LogIn />
       }, 
      { path: "register", 
        element: <SignUp />
       }, 
    ],
  },
]);

export default router;

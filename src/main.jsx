import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // Use RouterProvider instead of BrowserRouter
import "./index.css";
import router from "./routes/Routes.jsx"; // Ensure correct import path
import AuthProvider from "./context/providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <AuthProvider>
    <RouterProvider router={router} /> 
  </AuthProvider>
  </StrictMode>
);

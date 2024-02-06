import React from "react";
import ReactDOM from "react-dom/client";
import MainLayout from "./MainLayout/MainLayout";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./Component/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: ()=> fetch("http://localhost:5000/users")
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

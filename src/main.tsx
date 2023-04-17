import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Navlayout from "./layout/Navlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/settings",
        element: <h1>settings</h1>,
      },
      {
        path: "/help",
        element: <h1>Help</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

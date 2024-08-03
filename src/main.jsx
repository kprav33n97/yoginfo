import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./Components/Errorpage/Errorpage.jsx";
import Forms from "./Components/Forms/Forms.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Howdoyoga = lazy(() => import("./Pages/How/Howdoyoga.jsx"));
const Whydoyoga = lazy(() => import("./Pages/Why/Whydoyoga.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/why",
    element: <Whydoyoga />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/how",
    element: <Howdoyoga />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/expense",
    element: <Forms />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

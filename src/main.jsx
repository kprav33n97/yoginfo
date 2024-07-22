import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/Errorpage/Errorpage.jsx';
import Whydoyoga from './Pages/Why/Whydoyoga.jsx';
import Howdoyoga from './Pages/How/Howdoyoga.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/why",
    element: <Whydoyoga/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/how",
    element: <Howdoyoga/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

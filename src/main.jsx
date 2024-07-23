import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './Components/Errorpage/Errorpage.jsx';
import Whydoyoga from './Pages/Why/Whydoyoga.jsx';
import Howdoyoga from './Pages/How/Howdoyoga.jsx';
import Forms from './Components/Forms/Forms.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


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
  {
    path: "/expense",
    element: <Forms/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

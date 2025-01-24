import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Problem from "./Pages/Problem";
import CabinFinder from "./Pages/CabinFinder";
import About from "./Pages/About";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Hist from "./Pages/Hist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Problem",
        element: <Problem />,
      },
      {
        path: "/CabinFinder",
        element: <CabinFinder />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/History",
        element: <Hist />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="206695336293-47kff57p781b5o3pc7vh68bkrkdiq0je.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);

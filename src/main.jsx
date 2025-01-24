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
        element: <CabinFinder/>
      },
      {
        path: "/About",
        element: <About/>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

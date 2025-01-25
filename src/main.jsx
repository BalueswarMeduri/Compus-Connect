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
import store from "./store/store";
import { Provider } from "react-redux";
import Protected from "./components/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Protected authentication={false}><Login /></Protected>,
      },
      {
        path: "/",
        element: <Protected authentication={false}><Home /></Protected>,
      },
      {
        path: "/Problem",
        element: <Protected ><Problem /></Protected>,
      },
      {
        path: "/CabinFinder",
        element: <Protected><CabinFinder /> </Protected>,
      },
      {
        path: "/About",
        element: <Protected authentication={false}><About /></Protected>,
      },
      {
        path: "/History",
        element: <Protected><Hist /></Protected>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
      <Provider store={store} >
        <RouterProvider router={router} />
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>
);

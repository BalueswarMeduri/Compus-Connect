import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  );
};

export default App;

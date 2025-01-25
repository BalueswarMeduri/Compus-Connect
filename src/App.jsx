import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login as authLogin} from "./store/authSlice";

const App = () => {
  const dispatch = useDispatch();
  const [loading , setLoading ]= React.useState(true);

  React.useEffect(() => {
  
    const fetchDetails = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/user/get-current-user",
          {}, // Include an empty object for the request body if none is needed
          {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        dispatch(authLogin(response.data));
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };
  
    fetchDetails();
    setLoading(false);
  }, []);
  

  if(!loading) return (
    <div>
      <Navbar/>
      <Outlet />
      <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
    </div>
  );
};

export default App;

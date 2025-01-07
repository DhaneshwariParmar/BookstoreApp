import React from "react";
import Home from "./home/Home";
import Course from "./components/Course";
import {Routes, Route} from "react-router-dom";
import MyCourses from "./mycourse/MyCourses";
import Signup from "./components/Signup";
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
import { Navigate } from "react-router-dom";

function App() {
   const [authUser, setAuthUser] = useAuth()
    console.log(authUser);
  
  return(
    <>
   {/* <Home />
   <Course /> */}
   <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    <Route path={"/"} element={<Home />} />
    <Route path="/course" element={authUser?<MyCourses />:<Navigate to="/signup"/>} />
    <Route path="/signup" element={<Signup />} />
   </Routes>
   <Toaster />
   </div>
    </>
  )
}

export default App;

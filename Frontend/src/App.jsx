import React from "react";
import Home from "./home/Home";
import Course from "./components/Course";
import {Routes, Route} from "react-router-dom";
import MyCourses from "./mycourse/MyCourses";
import Signup from "./components/Signup";
function App() {
  return(
    <>
   {/* <Home />
   <Course /> */}
   <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    <Route path={"/"} element={<Home />} />
    <Route path="/course" element={<MyCourses />} />
    <Route path="/signup" element={<Signup />} />
   </Routes>
   </div>
    </>
  )
}

export default App;

import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Course from '../components/Course';
// import list from "../../public/list.json"

const MyCourses = () => {
    // console.log(list)
  return ( 
  <>
    
    <Navbar />
    <div className='min-h-screen'>
    <Course className=' dark:bg-slate-900 dark:text-white' />
    </div>
  
    <Footer />
    
    </>
  )
}

export default MyCourses;
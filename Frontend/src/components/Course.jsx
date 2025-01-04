import React from 'react'
import list from "../../public/list.json"
import Card from './Card'
import { useNavigate } from 'react-router-dom'
const Course = () => {
    const navigate = useNavigate();
      return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white '>
    <div className=' justify-center items-center text-center pt-28'>
    <h1 className='text-2xl  md:text-4xl'>
        We're delighted to have you <span className='text-pink-500'>here ! :)</span>
    </h1>
    <p className='mt-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, praesentium. Est, labore a possimus sequi quasi exercitationem, incidunt sunt at eveniet molestiae qui optio odit autem laudantium, sequi quasi exercitationem, incidunt sunt at eveniet molestiae qui optio odit autem  similique explicabo totam!</p>
    <button className="btn-active btn-secondary mt-6 px-4 py-2 rounded-md hover:bg-pink-700 duration-300" onClick={()=>navigate('/')}
    >Back</button>
    </div>

    <div className=' mt-12 grid grid-cols-1 md:grid-cols-3 '>
        {
            list.map((item)=>(
           <Card item={item} key={item.id} />
            ))
        }
    </div>
   </div>
  
   </>
  )
}

export default Course
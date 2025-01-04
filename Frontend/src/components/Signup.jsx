import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onsubmit = (data) => console.log(data);

  return (
    <div className='h-screen flex justify-center items-center'>
    <div  className="">
<div className="modal-box shadow-md px-12 py-7 rounded-md w-full">
  <form onSubmit = {handleSubmit(onsubmit)}>
    {/* if there is a button in form, it will close the modal */}
    <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none">✕</Link>
  
  <h3 className="font-bold text-lg text-center">SignUp</h3>
  {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}

  <div className="mt-4 space-y-2">
      <span>Name</span>
      <br />
      <input type="text" placeholder="Enter your Name" className="w-80 rounded-md px-3 py-1 outline-none border"
      {...register("name", {required:true})}/>
      <br />
      {errors.name && <span className='text-sm text-red-400'>This field is required</span>}
  </div>

  <div className="mt-4 space-y-2">
      <span>Email</span>
      <br />
      <input type="email" placeholder="Enter your email" className="w-80 rounded-md px-3 py-1 outline-none border" {...register("email", {required:true})}/>
      <br />
      {errors.email && <span className='text-sm text-red-400'>This field is required</span>}

  </div>

  <div className="mt-4 space-y-2">
      <span>Password</span>
      <br />
      <input type="text" placeholder="Enter your password" className="w-80 rounded-md px-3 py-1 outline-none border" 
      {...register("password", {required:true})}/>
      <br />
      {errors.password && <span className="text-sm text-red-400">This field is required</span>}

  </div>

  <div className="flex justify-around  pt-6">
      <button className="rounded-md bg-pink-500 text-white px-3 py-1 ">Signup</button>
      <p className=' pt-1 pl-10'>Already have an account 
          <a className="text-blue-500 underline cursor-pointer" onClick={()=>document.getElementById("my_modal_3").showModal()}>Login 

          </a>
          <Login />
      </p>
      
  </div>
  </form>
</div>
</div>
    </div>
  )
}

export default Signup
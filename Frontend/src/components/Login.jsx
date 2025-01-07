import React from "react";
import Signup from "./Signup";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    }
   await axios.post("http://localhost:4001/users/login", userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("LoggedIn Successfully")
        document.getElementById("my_modal_3").close();
        setTimeout(()=>{
          window.location.reload();
      localStorage.setItem("Users", JSON.stringify(res.data.user))
        }, 1000)
        
      }
    }).catch((err)=>{
      if(err.response){
        console.log(err);
        toast.error("error:" + err.response.data.message);
        setTimeout(()=>{

        },2000)
      }
    })
    console.log(data)
  }

  return (
   <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} >
      {/* if there is a button in form, it will close the modal */}
      {/* <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none">✕</Link> */}
      <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
    
    <h3 className="font-bold text-lg">Login</h3>
    {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
    <div className="mt-4 space-y-2">
        <span>Email</span>
        <br />
        <input type="email" placeholder="Enter your email" className="w-80 rounded-md px-3 py-1 outline-none border" 
        {...register("email", { required: true })}
        />
        <br />
          {errors.email && <span className="text-sm text-red-400 ">This field is required</span>}
    </div>

    <div className="mt-4 space-y-2">
        <span>Password</span>
        <br />
        <input type="text" placeholder="Enter your password" className="w-80 rounded-md px-3 py-1 outline-none
         border"
        {...register("password", { required: true })}
        />
        <br />
         {errors.password && <span className="text-sm text-red-400">This field is required</span>}
    </div>

    <div className="flex justify-around pt-6">
        <button className="rounded-md bg-pink-500 text-white px-3 py-1 ">Login</button>
        <p>Not registered yet? 
            <Link to="/signup" className="text-blue-500 underline">Signup </Link>
        </p>
    </div>
    </form>
  </div>
</dialog>
      </div>
  );
}

export default Login;

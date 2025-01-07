import React from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider'


function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogOut = () =>{
        try{
            setAuthUser(null);
              localStorage.removeItem("Users")
              toast.success("Logout Successfully")
              setTimeout(()=>{
                window.location.reload();
              }, 3000)
        }catch(error){
         toast.error("Error" + error.message)
         setTimeout(()=>{

         },2000)
        }
        
    }
  return (
    <div>
        <button className='px-3 py-2 rounded-md bg-red-500 text-white' onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default Logout
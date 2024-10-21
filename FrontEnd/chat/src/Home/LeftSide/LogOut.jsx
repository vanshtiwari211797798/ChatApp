import React from 'react'
import { RiLogoutCircleFill } from "react-icons/ri";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LogOut = () => {

  const Logout = () => {
    localStorage.removeItem('chatuser');
    toast.success("Logout Successfully");
    
  }

  return (
    <div className=' w-[3%] h-screen bg-slate-950 text-white  flex flex-col-reverse py-5 px-2 text-2xl'>
        <button onClick={Logout}><RiLogoutCircleFill /></button>
    </div>
  )
}

export default LogOut
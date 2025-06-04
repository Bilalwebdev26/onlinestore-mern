import React, { useEffect } from "react";
import MyOrderPage from "./MyOrderPage.jsx";
import{useDispatch, useSelector}from "react-redux"
import { logoutUser, userProfile } from "../redux/slices/auth.slice.js";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const{user,loading,error}=useSelector((state)=>state.auth)
  console.log('------------User : ',user)
  useEffect(()=>{
    // if(!user){
    //   navigate("/")
    // }
    dispatch(userProfile())
  },[dispatch])
  const handleLogOut = ()=>{
    dispatch(logoutUser())
    navigate("/")
  }
  if(loading){
    return <p className="text-3xl font-mono text-center">Loading...</p>
  }
  if(error){
    return <p className="text-xl font-mono text-center">Error : {error}</p>
  }
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-x-6 md:space-y-0">
          {/* left section */}
          <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{user?.name}</h1>
            <p className="text-lg text-gray-600 mb-4">{user?.email}</p>
            <button onClick={handleLogOut} className="bg-red-500 w-full text-white font-semibold rounded-lg py-2 px-4 hover:scale-110 hover:bg-red-700 duration-400 cursor-pointer">
              Log Out
            </button>
          </div>
          {/* Right section */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <MyOrderPage/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from 'react'
import CustomButton from './common Componets/CustomButton'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function TwitterHome() {
    const navigate = useNavigate();
    const activeUser = useSelector((state)=>state.User.user);


    const handleLogOut = ()=>{
        navigate("/");
    }
  return (
    <div>
        <h1>Welcome {activeUser.name} to the home Page of Twitter</h1>
        <CustomButton name={"Logout"} clickFunction={handleLogOut} />
        
    </div>
  )
}

export default TwitterHome
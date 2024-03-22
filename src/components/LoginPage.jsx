import React, { useReducer, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import CustomInput from "./common Componets/CustomInput";
import CustomButton from "./common Componets/CustomButton";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import {setUser} from "../slices/userSlice";

function LoginPage({flag, setFlag}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const handleLogin = async(event)=>{
    event.preventDefault();
    if(password.length>6){
      try{
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          email,
          password
        )

        const user = userCredentials.user;

        let userDoc = await getDoc(doc(db, "users", user.uid));
        
        let userData = userDoc.data();

        console.log("userDoc", userDoc.data());

        dispatch(setUser({
          name:userData.name,
          email:user.email,
          uid : user.uid
        }))
        navigate("/home");
      }
      catch(err){
        console.log(err);
      }
    }else{
      alert("password is invalid");
    }
  }


  return (
    <div>
      <FaTwitter style={{ color: "#1DA1F2", fontSize: "100px" }} />
      <h1>Log in to Twitter</h1>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <CustomInput type="text" placeholder="email addres" value={email} changeFunc={setEmail}/>
        <CustomInput type="password" placeholder="Password" value={password} changeFunc={setPassword}/>
        <CustomButton name="submit" clickFunction={handleLogin}/>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <a href="#">Forgot Password</a>
            <a href="#" onClick={()=>setFlag(!flag)}>Sign up to Twitter</a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
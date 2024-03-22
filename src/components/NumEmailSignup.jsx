import React, { useState } from 'react'
import twitter from "./images/twitter-logo-4 1 (1).png";
import CustomInput from './common Componets/CustomInput';
import CustomButton from './common Componets/CustomButton';
import DateOfBirth from './common Componets/DateOfBirth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlice';

function NumEmailSignup() {
    const [name, setName] = useState("");
    const [isEmail, setIsEmail] = useState(true);
    const [num, setNum] = useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();

    const [selectedDay, setSelectedDay] = useState('day');
    const [selectedMonth, setSelectedMonth] = useState('month');
    const [selectedYear, setSelectedYear] = useState('year');
    const navigate = useNavigate();

    const handleSubmit = async(event)=>{
        event.preventDefault();
        console.log("handleing submit")
        console.log(name, email, password)
        if(password === confirmPassword && password.length >6){
            try{
                const userCredentials = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

                const user = userCredentials.user;

                await setDoc(doc(db, "users", user.uid),{
                    name:name,
                    email:user.email,
                    uid:user.uid
                })

                dispatch(
                    setUser({
                        name:name,
                        email:user.email,
                        uid:user.uid,
                    })
                )
                navigate("/home");
            }catch(err){
                console.log(err);
            }
        }else{
            if(password !== confirmPassword){
                alert("Password and confirm password are not same!!!")
            }
            else if(password.length < 6){
                alert("Password needs to be of 6 or more characters");
            }
        }
    }

  return (
    <div>
        <img src={twitter} alt="" />
      <h1>Create an account</h1>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <CustomInput type="text" placeholder="name" value={name} changeFunc={setName}/>
        {!isEmail ? <CustomInput type="text" placeholder="phone number" value={num} changeFunc={setNum}/> :
        <CustomInput type="text" placeholder="email" value={email} changeFunc={setEmail}/>
        }
        <a style={{cursor:"pointer"}} onClick={()=>setIsEmail(!isEmail)}>{!isEmail? "use Email" : "use phone number"}</a>
        <label>Date of birth</label>
        <div>
            <DateOfBirth 
            selectedDay={selectedDay} 
            setSelectedDay={setSelectedDay}
            selectedMonth ={selectedMonth}
            setSelectedMonth = {setSelectedMonth} 
            selectedYear = {selectedYear}
            setSelectedYear={setSelectedYear}/>
        </div>
        {/* <CustomInput type="" placeholder="Password" value={password} changeFunc={setPassword}/> */}
        <CustomInput type="password" placeholder="Password" value={password} changeFunc={setPassword}/>
        <CustomInput type="password" placeholder=" Confirm Password" value={confirmPassword} changeFunc={setConfirmPassword}/>

        <CustomButton name="Next" clickFunction = {handleSubmit}/>
      </form>
      <p style={{color:"red", fontWeight:"bolder"}}>{!isEmail? "signup with number is not available at the time!":""}</p>
    </div>
  )
}

export default NumEmailSignup
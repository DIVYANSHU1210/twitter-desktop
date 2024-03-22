import SignupPage from "./components/SignupPage"
import LoginPage from "./components/LoginPage"
import { useState } from "react"
import { Route, Routes } from "react-router-dom";
import NumEmailSignup from "./components/NumEmailSignup";
import PrivateRouter from "./PrivateRouter";
import TwitterHome from "./components/TwitterHome";
function App() {
  const [flag, setFlag] = useState(false);
  console.log(flag);
  return (
    <>
      <Routes>
        <Route path="/" element={flag ? <LoginPage flag={flag} setFlag = {setFlag}/> : <SignupPage flag={flag} setFlag = {setFlag}/>}></Route>
        <Route path="/mobile-signup" element={<NumEmailSignup/>}></Route>
        <Route element={<PrivateRouter/>}>
          <Route path="/home" element={<TwitterHome/>}></Route>
        </Route>
      </Routes>
      
    </>
  )
}

export default App

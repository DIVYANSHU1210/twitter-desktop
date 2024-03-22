import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import CustomInput from "./common Componets/CustomInput";
import CustomButton from "./common Componets/CustomButton";
import hero from "./images/back-twitter 1.png";
import twitter from "./images/twitter-logo-4 1 (1).png";
import google from "./images/google-icon 1.png";
import apple from "./images/logo-apple 1.png";
import { useNavigate } from "react-router-dom";

function SignupPage({ flag, setFlag }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();

  return (
    <>
      <div className="signup-page">
        <img
          src={hero}
          alt="Twitter Image"
          style={{ width: "60vw", height: "100vh", minHeight: "500px" }}
        />
        <div style={{paddingBlock:"1rem"}}>
          <img src={twitter} alt="twitter" />
          <h1>Happening now</h1>
          <h2>Join Twitter today</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <button>
              <img src={google} alt="" />
              Sign up with Google
            </button>
            <button>
              <img src={apple} alt="" />
              Sign up with Apple
            </button>
            <button onClick={()=>navigate("/mobile-signup")}>Sign up with phone or email</button>
          </div>

          <p>
            By singing up you agree to the <a href="#">Terms of Service</a> and{" "}
            <a href="">Privacy Policy</a>, including <a href="">Cookie Use</a>.
          </p>
          <p>
            Already have an account?
            <span>
              <a href="#" onClick={() => setFlag(!flag)}>
                Login
              </a>
            </span>
          </p>
        </div>
      </div>
      <div className="anchors">
        <a href="#">About</a>
        <a href="#">Help Center</a>
        <a href="">Terms of Service</a>
        <a href="">Privacy Policy</a>
        <a href="">Cookie Policy</a>
        <a href="">Ads info</a>
        <a href="">Blog</a>
        <a href="">Status</a>
        <a href="">Carrres</a>
        <a href="">Brand Resources</a>
        <a href="">Advertsing</a>
        <a href="">Marketing</a>
        <a href="">Twitter for Business</a>
        <a href="">Developers</a>
        <a href="">Directory</a>
        <a href="">Settings</a>
        <a href="">© 2021 Twitter, Inc.</a>
      </div>
    </>
  );
}

export default SignupPage;

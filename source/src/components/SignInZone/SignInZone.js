import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignInZone.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faLock} from "@fortawesome/free-solid-svg-icons";

import { message } from "antd";
import { auth } from "../../backend-api/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignInZone() {
    const [isChecked, setIsChecked] = useState(false);
    const [messageApi, notificationHolder] = message.useMessage();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const uploadMessage = (content, type, duration) => {
        messageApi.destroy();
        messageApi.open({
          content: content,
          type: type,
          duration: duration,
          style: {
            marginTop: '20px auto',
          }
        })
      }
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    return (
      <div className="SignInZone" >
        <img className="logo" src="/Greenlogo.svg" alt="Logo" ></img>
        <div className="SignInCard">
            <p className="title">Sign in</p>
            <p className="text">Account </p>
           <div className="inputContainer"> 
                <div className="icon">
                <FontAwesomeIcon icon={faUser} /></div>
                <input
                    type="text"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    className="inputField"
                    placeholder="User Name"
                />
            </div>
            <p className="text">Password </p>
            <div className="inputContainer"> 
                <div className="icon">
                <FontAwesomeIcon icon={faLock} /></div>
                <input
                    type="text"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    className="inputField"
                    placeholder="Password"
                />
            </div>
            <div style={{marginLeft:"42px", marginTop:"5px",marginBottom:"30px"}}>
            <input
                type="checkbox"
                id="remember"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <label htmlFor="remember" >Remember me</label>
                <Link to="/signup" style={{marginLeft:"280px",fontStyle:"italic"}}>Forgot password?</Link>
            </div>
            <Link to ="/homepage">
                <button className="btn">Log in</button>
            </Link>
            <Link to ="/signup">
                <button className="btn">Sign Up</button>
            </Link>

        </div>
            
      </div>
    );
  }
  
  export default SignInZone;
  
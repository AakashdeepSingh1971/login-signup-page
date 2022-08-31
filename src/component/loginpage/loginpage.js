import "./loginpage.css"
import { BsFillEyeSlashFill,BsFillEyeFill } from 'react-icons/bs';
import { useState } from "react"


const Loginpage = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    return(
 
        <div className="userpage">
            <h1>Login</h1>

            <div className="contact-form">
               
                <label> EMAIL</label>
                <input className="email" type="text" placeholder="Example@gmail.com" />
                <label > Enter your Password</label>
                <div>
                  <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} className="pass"  placeholder="XXXXXXXX" />   
                  <button className="eye" onClick={togglePassword}>
                     { passwordType==="password"? <BsFillEyeFill/> :<BsFillEyeSlashFill/> } </button>
                </div>
               
              
                <div className="button" >
                    <input className="submit-btn " type="submit" value="Register" />
                    <div>or</div>
                    <input className="submit-btn" id="left" type="submit" value="Login" />
                </div>

            </div>

            <div className="login">


            </div>
        </div>

    )
}

export default Loginpage

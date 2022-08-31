import "./signuppage.css"
import { BsFillEyeSlashFill,BsFillEyeFill } from 'react-icons/bs';
import { useState } from "react"

const Signuppage = () => {
        const [ user,setUser ] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword: ""
        })
        const handleChange = e => {
            const {name,value} = e.target;
            setUser({
                ...user,
                [name]:value
            })

        }
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(e)=>{
        setPasswordInput(e.target.value);
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
        <h1> Hello User </h1>
        <h2> Please enter your credentials </h2>
        <div className="contact-form">
                <label> Name</label>
                <input name="name" value={user.name}class="email" type="text" placeholder="Enter your Name" onChange={handleChange} />
                <label> Email</label>
                <input name="email" value={user.email}class="email" type="text" placeholder="Enter your Email" onChange={handleChange} />
                <label> Enter your Password</label>
                <div>
                <input name="password"  type={passwordType} onChange={(handleChange)(handlePasswordChange)} value={(user.password) (passwordInput)} className="pass"  placeholder="XXXXXXXX"  />   
                  <button className="eye" onClick={togglePassword}>
                     { passwordType==="password"? <BsFillEyeFill/> :<BsFillEyeSlashFill/> } </button>
                </div>
                <label> Confirm your Password</label>
                <div>
                <input name="reEnterPassword" type={passwordType} onChange={(handleChange)(handlePasswordChange)} value={(user.reEnterPassword) (passwordInput)} className="pass"  placeholder="XXXXXXXX"  />   
                  <button className="eye" onClick={togglePassword}>
                     { passwordType==="password"? <BsFillEyeFill/> :<BsFillEyeSlashFill/> } </button>
                     </div>
                <div className="button" >
                    <input className="submit-btn" id="left" type="submit" value="Login" />
                    <div>or</div>
                    <input className="submit-btn " type="submit" value="Register" />
                </div>

            </div>

            <div className="login">
</div>

    </div>
    )
}

export default Signuppage
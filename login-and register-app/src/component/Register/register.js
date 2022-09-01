import "./register.css"
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import { useState } from "react"

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const [passwordType, setPasswordType] = useState(true);
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }
    const togglePassword = () => {

        setPasswordType(!passwordType)
    }
    return (
        <div className="register">
            <h1> Hello User </h1>
            <h2> Please enter your credentials </h2>
            <div className="contact-form">
                <label> Name</label>
                <input name="name" value={user.name} class="email" type="text" placeholder="Enter your Name" onChange={handleChange} />
                <label> Email</label>
                <input name="email" value={user.email} class="email" type="text" placeholder="Enter your Email" onChange={handleChange} />
                <label> Enter your Password</label>
                <div>
                    <input name="password" type={passwordType ? "password" : "text"} onChange={handleChange} value={user.password} className="pass" placeholder="XXXXXXXX" />
                    <button className="eye" onClick={togglePassword} >
                        {passwordType ? <BsFillEyeFill /> : <BsFillEyeSlashFill />} </button>
                </div>
                <label> Confirm your Password</label>
                <div>
                    <input name="reEnterPassword" type={passwordType ? "password" : "text"} onChange={handleChange} value={user.reEnterPassword} className="pass" placeholder="XXXXXXXX" />
                    <button className="eye" onClick={togglePassword}>
                        {passwordType ? <BsFillEyeFill /> : <BsFillEyeSlashFill />} </button>
                </div>
                <div className="button" >
                    <input className="submit-btn " type="submit" value="Register" />
                    <div>or</div>
                    <input className="submit-btn" id="left" type="submit" value="Login"  />
                </div>

            </div>

            <div className="login">
            </div>

        </div>
    )
}

export default Register
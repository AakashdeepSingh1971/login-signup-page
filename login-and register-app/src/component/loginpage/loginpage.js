import "./loginpage.css"
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import { useState } from "react"
import axios from 'axios';
import swal from 'sweetalert'


const Loginpage = () => {
    const [user, setUser] = useState({

        email: "",
        password: ""

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
    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }
    const togglePassword = () => {

        setPasswordType(!passwordType)
    }
    const login=() => {
        axios.post("http://localhost:9002/login", user)
        .then(res=>alert(res.data.message))
    }
    return (

        <div className="userpage">
            <h1>Login</h1>

            <div className="contact-form">

                <label> EMAIL</label>
                <input className="email" name="email" value={user.email} type="text" onChange={handleChange} placeholder="Example@gmail.com" />
                <label > Enter your Password</label>
                <div>
                    <input name="password" value={user.password} type={passwordType ? "password" : "text"} onChange={handleChange} className="pass" placeholder="XXXXXXXX" />
                    <button className="eye" onClick={togglePassword} >
                        {passwordType ? <BsFillEyeFill /> : <BsFillEyeSlashFill />} </button>
                </div>
                <div className="button" >
                    <input className="submit-btn " type="submit" value="Login" onClick={login} />
                    <div>or</div>
                    <input className="submit-btn" id="left" type="submit" value="Register" />
                </div>
            </div>
            <div className="login">
            </div>
        </div>

    )
}

export default Loginpage

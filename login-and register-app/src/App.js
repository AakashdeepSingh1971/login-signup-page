import './App.css';
import Register from './component/Register/register';
import Loginpage from './component/loginpage/loginpage';
import Userpage from './component/userpage/userpage';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({
    
  })
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Userpage setLoginUser={setLoginUser}/> : <Loginpage setLoginUser={setLoginUser}/>
            } </Route>
          <Route path="/login"> 
          <Loginpage setLoginUser={setLoginUser} /> 
          </Route>
          <Route path="/register"> 
          <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Register from './component/Register/register';
import Loginpage from './component/loginpage/loginpage';
import Userpage from './component/userpage/userpage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"> <Userpage /></Route>
          <Route exact path="/login"> <Loginpage /> </Route>
          <Route exact path="/register"> <Register /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

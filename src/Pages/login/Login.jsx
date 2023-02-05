import { useContext, useRef, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";

function Login() {
  const {user, dispatch} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const handleLogin =(e) => {
  e.preventDefault();
  try {
    
    login({email, password}, dispatch);
    console.log('done');
  } catch (error) {
    console.log(error)    
  }
}

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)} />
          <button className="loginButton" onClick={handleLogin}> Sign In</button>
          <span>
            Dont Have an account <b>Sign up now.</b>
          </span>
          <small>
          This page is protected by Google reCAPTCHA to ensure you're not a
            bot.  <b> Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
export default Login;
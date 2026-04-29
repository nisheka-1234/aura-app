import { useState, useEffect } from "react";
import "./login.css";


function Login({ onLogin,goReset }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const correctuser = "nisheka";
  const correctpassword = "123456";

  useEffect(() => {
    console.log("User entered the login page");
  }, []);

  const handleLogin = () => {
    if (username === correctuser && password === correctpassword) {
      alert("Username and password are correct");
      onLogin();
    } else if (username === correctuser && password !== correctpassword) {
      alert("Password is wrong");
    } else if (username !== correctuser && password === correctpassword) {
      alert("Username is wrong");
    } else {
      alert("Both are wrong");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
      
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">Enter your username and password</p>

        <form>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />

          <button type="button" className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </form>

        <p className="forgot-text">
          Forgot Password? <span className="link" onClick={goReset}>Reset</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
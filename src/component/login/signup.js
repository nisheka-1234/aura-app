import React, { useState } from "react";
import "./signup.css";
import bg from "../login/assets/loginimage.jpg";

function Signup({ goLogin, onSignup }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const handleSignup = () => {
    if (!username.trim() || !password || !fullName.trim() || !gender || !dob) {
      alert("Please fill all fields");
      return;
    }

    alert("Signup successful");

    if (typeof onSignup === "function") {
      onSignup({
        username: username.trim(),
        password,
        fullName: fullName.trim(),
        gender,
        dob
      });
    }
  };

  return (
    <div className="signup-page" style={{ backgroundImage: `url(${bg})` }}>
  <div className="signup-card">

    <h1 className="signup-title">Aura Wear</h1>
    <p className="signup-subtitle">Create Account</p>

    <form>

      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="signup-input"
      />

      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="signup-input"
      >
        <option value="">Select Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select>

      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className="signup-input"
      />

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="signup-input"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="signup-input"
      />

      <button type="button" className="signup-btn" onClick={handleSignup}>
        Sign Up
      </button>

    </form>

    <p className="bottom-text">
      Already have an account?
      <span className="link" onClick={goLogin}> Login</span>
    </p>

  </div>
</div>
  );
}
export default Signup;
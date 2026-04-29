import { useState } from "react";
import "./reset.css";

function ResetPassword({ onReset }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleReset = () => {
    
    setError("");

    if (!newPassword || !confirmPassword) {
      setError("Please fill both fields");
      return;
    }

    if (newPassword.length < 4) {
      setError("Password must be at least 4 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }


    alert("✅ Password Reset Successful!");

    
    setNewPassword("");
    setConfirmPassword("");


    if (onReset) {
      onReset();
    }
  };

  return (
    <div className="reset-page">
      <div className="reset-card">
        <h1 className="reset-title">Reset Password</h1>
        <p className="reset-subtitle">
          Enter new password and confirm it
        </p>

        <form>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="reset-input"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="reset-input"
          />

    
          {error && <p className="error-text">{error}</p>}

          <button
            type="button"
            className="reset-btn"
            onClick={handleReset}
          >
            Reset Password
          </button>
        </form>

    
        <p className="bottom-text">
          Remembered password?{" "}
          <span className="link" onClick={onReset}>
            Back to Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default ResetPassword;
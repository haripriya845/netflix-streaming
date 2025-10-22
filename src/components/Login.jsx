import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/home");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="login">
      <div className="login-background"></div>

      <div className="login-box">
        <h1 className="login-title">Sign In</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>

        <div className="login-help">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Need help?</a>
        </div>

        <div className="login-footer">
          <p>
            New to Netflix? <a href="#">Sign up now</a>.
          </p>
          <small>
            This page is protected by Google reCAPTCHA to ensure you’re not a
            bot.
          </small>
        </div>
      </div>
    </div>
  );
}

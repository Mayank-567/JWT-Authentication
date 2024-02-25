import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form is submitted");
  };

  return (
    <div className="container">
      <div className="sub-container">
        <div className="heading">
          <h2>Register Account</h2>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="main">
            <div className="section">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your email here..."
                id="input-bar"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="section">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter your password here..."
                id="input-bar"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="section">
              <button type="submit" id="btn">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
        <div className="footer">
          <p>
            Already have an account? <Link to="/login">Login Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

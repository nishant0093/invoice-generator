import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Signup from "./Signup";
// import "../css/login.css";

const Login = () => {
  const [form, setForm] = useState({
    companyEmail: "",
    password: "",
  });

  const [showReset, setShowReset] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        console.log("Login failed");
        return;
      }

      const data = await response.json();
      console.log("Login successful:", data);
      alert("You are now logged in");
    } catch (err) {
      console.error("Error during login:", err);
    }
    setForm({
      companyEmail: "",
      password: "",
    });
  };

  const handleOnClickForgotPass = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/forgotpass");
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="page">
        <div className="left">
          <div className="left-content">
            <h1>Log into your account</h1>
            {/* <p>Create your invoices for free.</p> */}
          </div>

          <div className="floating-icons">
            <img src="/public/image/logo.png" />
            {/* <div className="icon purple"></div>
            <div className="icon blue"></div>
            <div className="icon yellow"></div> */}
          </div>
        </div>

        <div className="right">
          <div className={`form-card ${showReset ? "hidden" : ""}`}>
            <h2>Log in</h2>

            <button className="social google">Continue with Google</button>
            {/* <button className="social apple">Continue with Apple</button> */}

            <div className="divider">or</div>
            <form onSubmit={handleOnSubmit}>
              <input
                type="email"
                name="companyEmail"
                value={form.companyEmail}
                placeholder="Email Address"
                onChange={handleOnChange}
              />
              <input
                type="password"
                name="password"
                value={form.password}
                placeholder="Password"
                onChange={handleOnChange}
              />
              <button className="submit" type="submit">
                Log In
              </button>
            </form>

            <p className="signin">
              Don't have an account? <Link to="/signup">Create Account →</Link>
              <span>
                <button
                  className="forgotpass"
                  onClick={() => {
                    setShowReset(true);
                  }}
                >
                  Forgot Password?
                </button>
              </span>
            </p>
          </div>
          <div className={`form-card ${showReset ? "" : "hidden"}`}>
            <h2>Reset your password</h2>

            <form onSubmit={handleOnSubmit}>
              <input
                type="email"
                name="companyEmail"
                value={form.companyEmail}
                placeholder="Email Address"
                onChange={handleOnChange}
              />
              <button className="submit" type="submit">
                Send OTP
              </button>
            </form>

            {/* <p className="signin">
              Don't have an account? <Link to="/signup">Create Account →</Link>
              <span>
                <button onClick={handleOnClickForgotPass}>
                  Forgot Password?
                </button>
              </span>
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

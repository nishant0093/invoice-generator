import React, { useState } from "react";
import "../css/signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setform] = useState({
    companyName: "",
    companyEmail: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnSubmit = (e) => {
    console.log("Submitted");
    e.preventDefault();

    const submitform = async () => {
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        console.log("response received ok");
      }
      const data = await response.json();
      console.log(data);
    };

    submitform();

    console.log(
      `form submitted ${form.companyName},${form.companyEmail},${form.password},${form.confirmPassword} `
    );
    setform({
      companyName: "",
      companyEmail: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setform((x) => ({
      ...x,
      [name]: value,
    }));

    console.log(value);
  };

  return (
    <>
      <div className="page">
        <div className="left">
          <div className="left-content">
            <h1>Create your free account</h1>
            <p>Create your invoices for free.</p>
          </div>

          <div className="floating-icons">
            <img src="/public/image/logo.png" />
            {/* <div className="icon purple"></div>
            <div className="icon blue"></div>
            <div className="icon yellow"></div> */}
          </div>
        </div>

        <div className="right">
          <div className="form-card">
            <h2>Sign Up</h2>

            <button className="social google">Continue with Google</button>
            {/* <button className="social apple">Continue with Apple</button> */}

            <div className="divider">or</div>

            <form onSubmit={handleOnSubmit}>
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Full Name"
                value={form.companyName}
                onChange={handleOnChange}
              />
              <label>Email</label>
              <input
                type="email"
                name="companyEmail"
                value={form.companyEmail}
                placeholder="Email Address"
                onChange={handleOnChange}
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                placeholder="Password"
                onChange={handleOnChange}
              />
              {/* <small>Password must be strong.</small> */}
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                placeholder="Confirm Password"
                onChange={handleOnChange}
              />

              {/* <label>Email</label>
              <input type="email" placeholder="Email" />

              <label>Password</label>
              <input type="password" placeholder="Password" />
              <small>Password must be strong.</small>

              <label>Username</label>
              <input type="text" placeholder="Username" /> */}

              {/* <label>Country</label>
              <select>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select> */}

              <button className="submit">Create account</button>
            </form>
            <p className="signin">
              Already have an account? <Link to="/">Sign in →</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

import React, { useState } from "react";
import "../css/signup.css";
import Login from "./Login";

const Signup = () => {
  const [login, setlogin] = useState("signup");

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
      const data = response.json();
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
      <div class="page">
        <div class="left">
          <div class="left-content">
            <h1>Create your free account</h1>
            <p>Create your invoices for free.</p>
          </div>

          <div class="floating-icons">
            <img src="/public/image/logo.png" />
            {/* <div class="icon purple"></div>
            <div class="icon blue"></div>
            <div class="icon yellow"></div> */}
          </div>
        </div>

        <div class="right">
          <div class="form-card">
            <h2>Sign Up</h2>

            <button class="social google">Continue with Google</button>
            {/* <button class="social apple">Continue with Apple</button> */}

            <div class="divider">or</div>

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

              <button class="submit">Create account</button>
            </form>

            <p class="signin">
              Already have an account? <a href="#">Sign in →</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

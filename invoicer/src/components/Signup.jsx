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
      `form submitted ${form.fullName},${form.email},${form.password},${form.confirmPassword} `
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
      <div className="container">
        <div className="signup-card">
          {login === "signup" ? (
            <form onSubmit={handleOnSubmit}>
              <>
                <div className="left">
                  <h2>Sign Up</h2>

                  <input
                    type="text"
                    name="companyName"
                    placeholder="Full Name"
                    value={form.companyName}
                    onChange={handleOnChange}
                  />
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
                  <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    placeholder="Confirm Password"
                    onChange={handleOnChange}
                  />
                </div>

                <div className="right">
                  <button className="primary-btn" type="submit">
                    Sign Up
                  </button>

                  <p className="login-text">
                    Already have an account?{" "}
                    <a
                      href="#"
                      onClick={() =>
                        setlogin(login == "signup" ? "login" : "signup")
                      }
                    >
                      Log in
                    </a>
                  </p>

                  <span className="or">Or</span>

                  <button className="social google">Sign up with Google</button>
                  <button className="social facebook">
                    Sign up with Facebook
                  </button>
                </div>
              </>
            </form>
          ) : (
            <>{/* <Login /> */}</>
          )}
        </div>
      </div>
    </>
  );
};

export default Signup;

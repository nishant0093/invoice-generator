import React, { useState } from "react";
// import "../css/login.css";

const Login = () => {
  const [form, setForm] = useState({
    companyEmail: "",
    password: "",
  });

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
  };

  return (
    <div>
      <div>
        <form onSubmit={handleOnSubmit}>
          <h2>Log In</h2>
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
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

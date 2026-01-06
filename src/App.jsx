import { useState } from "react";
import { Login, Signup } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

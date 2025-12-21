import { useState } from "react";
import { Login, Signup } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Signup /> */}
      <Login />
    </>
  );
}

export default App;

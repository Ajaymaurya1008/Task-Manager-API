import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Add_task from "./Add-Task";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Add_task />
    </>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

function App() {

  const [color , setColor] = useState("ali hassan ")
  const [coumt , setCount] = useState(0)

  return <>
  
  <button onClick={() => { setColor("aboreda") }}>
    
    count is {color}
  </button>

  <br />
  <br />
  <br />
  <br />

  <button onClick={() => { setCount(coumt+1) }}>count is {coumt}</button>
  </>;
}

export default App;

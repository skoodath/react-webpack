import React, {useState} from "react";
import "./style.css";

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className="counter_heading">Count {count}</h1>
      <button 
        onClick={() => 
          setCount(preCount => preCount + 1)
          } 
          className="counter_button"
          >
          +
        </button>
    </>
  )
}

export default App;
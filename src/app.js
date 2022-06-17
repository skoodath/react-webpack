import React, {useState} from "react";
import AboutComponent from "./components/about/AboutComponent";
import HeroComponent from "./components/hero/HeroComponent";
import "./style.scss";

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <HeroComponent />
      <AboutComponent />
    </>
  )
}

export default App;
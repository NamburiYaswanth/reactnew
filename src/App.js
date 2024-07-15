import { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Posts from "./components/Posts";

function App() {
  // const [change , setChange]= useState("")
  // const handleChnage = (event)=>{
  //   setChange(event.target.value)
  // }
  return (
    <div className="App">
      <h1>We have learn reactjs</h1>
      <Posts />
      <Home />
      <About />
      <Counter />
      {/* <div>
        {change}
        <input type="text" onchange={handleChnage}/>
      </div> */}
    </div>
  );
}

export default App;

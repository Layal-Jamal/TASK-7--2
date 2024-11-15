import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [Message, setMessage] = useState(false);
  const [decrementMode, setIsDecrementMode] = useState(false);
  const [bgcolor, setBgcolor] = useState("#fff");

  const handleButtonClick = () => {if (decrementMode==false) {
      const result = count + increment;
      setCount(result);
      if (result === 10) {
        setIncrement(10);
      } 
      else if (result === 100) {
        setIncrement(100);
      } 
        else if (result >= 1000) {
        setIsDecrementMode(true);
      }
    } else {
      const result = count - increment;
      setCount(result);
      if (result === 100) {
        setIncrement(10);
      } else if (result === 10) {
        setIncrement(1);
      }
    }
  };

  useEffect(() => {
    setMessage(true);
    if (count === 10 || count === 100 ||  count === 1000) {
      setMessage(true);
    }

    return () => {setMessage(false);}; }, [count]);


      //change bg-colors
  useEffect(() => {
    if (count === 10) {
      setBgcolor(" pink");
    } else if (count === 100) {
      setBgcolor("rgb(202, 89, 202)");
    } else if (count === 1000) {
      setBgcolor("orange");
    }
  }, [count]);

  return (
<div className="box" style={{ backgroundColor: bgcolor }}> {Message &&(<div className="startbox"> {count === 0 ? "Start " : "  "} </div>
      )}
      <h2>Result Is: {count}</h2>
      <button onClick={handleButtonClick}>
        {
        decrementMode ? "Decrement -" : "Increment + "
        }</button>
    </div>
  );
}
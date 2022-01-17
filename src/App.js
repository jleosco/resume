import { useEffect, useState } from 'react';
import useInterval from './useInterval';
import './App.css';

function App() {
  const [xPos, setXPos] = useState(50)
  const [yPos, setYPos] = useState(150)
  const [dY, setDY] = useState(5)
  const [dX, setDX] = useState(5)
  const [countInterval, setCountInterval] = useState(0)
  const [count1, setCount1] = useState(0)
  
  useEffect(()=>{
    startAnimation()
  }, [])
  
  const updateCount1 = () => {
    setCount1(count1 + 1)
  }
  useInterval(updateCount1, 1000)
  
  const tick = () => {
    setCountInterval((prevState)=> prevState + 1)
  }

  const startAnimation = () => {
    setInterval(()=>{
      tick()
    }, 60)
  }

  useEffect(()=>{
    setYPos(yPos + dY)
    setXPos(xPos + dX)
  },[countInterval])

  useEffect(()=>{
    if(yPos > 280) {
      setYPos(270)
      setDY(-5)
    }
    if(yPos < 5) {
      setYPos(5)
      setDY(5)
    }
    if(xPos > 270) {
      setXPos(270)
      setDX(-5)
    }
    if(xPos < 5) {
      setXPos(5)
      setDX(5)
    }
  },[xPos, yPos])

  return (
    <div className="App">
      <h1>About John</h1>
      <h2>Work History</h2>
      <h3>Medical Records Data Entry</h3>
      <p>Uploaded medical documents to patient files.</p>
      <h3>Cashier</h3>
      <p>Took customer's orders.</p>
      <h3>Expo</h3>
      <p>Checked food quality and put orders together.</p>

      <h2>Animation:</h2>
     <div style={{width:'300px', height:'300px', border:'1px solid black', position:'relative'}}>
       <div style={{position:'absolute', top:yPos, left:xPos}}>dvd</div>
     </div>
    </div>
  );
}

export default App;

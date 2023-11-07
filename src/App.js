import './App.css';
import blueCandy from "./Assets/blue-candy.jpeg";
import greenCandy from "./Assets/green-candy-round.jpeg";
import orangeCandy from "./Assets/orange-candy-big.jpeg";
import purpleCandy from "./Assets/purple-candy.jpeg";
import redCandy from "./Assets/red-candy.jpeg";
import yellowCandy from "./Assets/yellow-candy.jpeg";
import blank from "./Assets/blank.png";
import { useEffect, useState } from 'react';
const width = 10;
const candyColors = [
  blueCandy, greenCandy, orangeCandy,purpleCandy,redCandy,yellowCandy
]
function App() {
  const [currentCandyArrangement,setCurrentCandyArrangement] = useState([]);

  useEffect(()=>{
    createBoard();
    
  },[])
  const createBoard = () => {
    const randomCandyArrangement = [];

    for(let i=0;i<width * width;i++){
      const randomCandy = Math.floor(Math.random() * candyColors.length);
      randomCandyArrangement.push(candyColors[randomCandy]);
    }
    setCurrentCandyArrangement([...randomCandyArrangement]);
  }
  console.log(currentCandyArrangement);
  return (
    <div className="App">
      <div className='game'>
        {currentCandyArrangement.map((candy,index)=><img key={index} src={candy} alt='candy'/>)}
      </div>
    </div>
  );
}

export default App;

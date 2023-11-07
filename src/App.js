import "./App.css";
import blueCandy from "./Assets/blue-candy.jpeg";
import greenCandy from "./Assets/green-candy-round.jpeg";
import orangeCandy from "./Assets/orange-candy-big.jpeg";
import purpleCandy from "./Assets/purple-candy.jpeg";
import redCandy from "./Assets/red-candy.jpeg";
import yellowCandy from "./Assets/yellow-candy.jpeg";
import blank from "./Assets/blank.png";
import { useEffect, useState } from "react";
const width = 10;
const candyColors = [
  blueCandy,
  greenCandy,
  orangeCandy,
  purpleCandy,
  redCandy,
  yellowCandy,
];
function App() {
  const [currentCandyArrangement, setCurrentCandyArrangement] = useState([]);

  useEffect(() => {
    createBoard();
  }, []);

  const checkForColumnOfFive = () => {
    for (let i = 0; i < 60; i++) {
      const columnOfFive = [
        i,
        i + width,
        i + width * 2,
        i + width * 3,
        i + width * 4,
      ];
      const decidedCandy = currentCandyArrangement[i];

      if (
        columnOfFive.every(
          (index) => currentCandyArrangement[index] === decidedCandy
        )
      ) {
        columnOfFive.forEach(
          (index) => (currentCandyArrangement[index] = blank)
        );
      }
    }
  };
  const checkForColumnOfFour = () => {
    for (let i = 0; i < 69; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
      const decidedCandy = currentCandyArrangement[i];

      if (
        columnOfFour.every(
          (index) => currentCandyArrangement[index] === decidedCandy
        )
      ) {
        columnOfFour.forEach(
          (index) => (currentCandyArrangement[index] = blank)
        );
      }
    }
  };
  const checkForRowOfFive = () => {
    const notValid = [
      6, 7, 8, 9, 16, 17, 18, 19, 26, 27, 28, 29, 36, 37, 38, 39, 46, 47, 48,
      49, 56, 57, 58, 59, 66, 67, 68, 69, 76, 77, 78, 79, 86, 87, 88, 89, 96,
      97, 98, 99,
    ];

    for (let i = 0; i < 100; i++) {
      const rowOfFive = [i, i + 1, i + 2, i + 3, i + 4];
      const decidedCandy = currentCandyArrangement[i];

      if (notValid.includes(i)) continue;

      if (
        rowOfFive.every(
          (index) => currentCandyArrangement[index] === decidedCandy
        )
      ) {
        rowOfFive.forEach((index) => (currentCandyArrangement[index] = blank));
      }
    }
  };
  const checkForRowOfFour = () => {
    const notValid = [
      7, 8, 9, 17, 18, 19, 27, 28, 29, 37, 38, 39, 47, 48, 49, 57, 58, 59, 67,
      68, 69, 77, 78, 79, 87, 88, 89, 97, 98, 99,
    ];

    for (let i = 0; i < 100; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3];
      const decidedCandy = currentCandyArrangement[i];

      if (notValid.includes(i)) continue;

      if (
        rowOfFour.every(
          (index) => currentCandyArrangement[index] === decidedCandy
        )
      ) {
        rowOfFour.forEach((index) => (currentCandyArrangement[index] = blank));
      }
    }
  };
  const checkForRowOfThree = () => {
    const notValid = [
      8, 9, 18, 19, 28, 29, 38, 39, 48, 49, 58, 59, 68, 69, 78, 79, 88, 89, 98,
      99,
    ];

    for (let i = 0; i < 100; i++) {
      const rowOfThree = [i, i + 1, i + 2];
      const decidedCandy = currentCandyArrangement[i];

      if (notValid.includes(i)) continue;

      if (
        rowOfThree.every(
          (index) => currentCandyArrangement[index] === decidedCandy
        )
      ) {
        rowOfThree.forEach((index) => (currentCandyArrangement[index] = blank));
      }
    }
  };
  const checkForColumnOfThree = () => {
    for (let i = 0; i < 80; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      const decidedCandy = currentCandyArrangement[i];

      if (
        columnOfThree.every(
          (index) => currentCandyArrangement[index] === decidedCandy
        )
      ) {
        columnOfThree.forEach(
          (index) => (currentCandyArrangement[index] = blank)
        );
      }
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfFive();
      checkForRowOfFive();
      checkForColumnOfFour();
      checkForRowOfFour();
      checkForColumnOfThree();
      checkForRowOfThree();
      setCurrentCandyArrangement([...currentCandyArrangement]);
    }, 5000);
    return () => clearInterval(timer);
  }, [
    checkForColumnOfFive,
    checkForColumnOfFour,
    checkForColumnOfThree,
    checkForRowOfFive,
    checkForRowOfFour,
    checkForRowOfThree,
    currentCandyArrangement,
  ]);

  const createBoard = () => {
    const randomCandyArrangement = [];

    for (let i = 0; i < width * width; i++) {
      const randomCandy = Math.floor(Math.random() * candyColors.length);
      randomCandyArrangement.push(candyColors[randomCandy]);
    }
    setCurrentCandyArrangement([...randomCandyArrangement]);
  };
  console.log(currentCandyArrangement);
  return (
    <div className="App">
      <div className="game">
        {currentCandyArrangement.map((candy, index) => (
          <img key={index} src={candy} alt="candy" data-id={index} />
        ))}
      </div>
    </div>
  );
}

export default App;

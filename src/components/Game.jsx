import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Game = () => {
  const [light, setLight] = useState("red");
  const [position, setPosition] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const speed = 10;
  const [finishLine, setFinishLine] = useState(
    window.innerWidth < 768 ? 100 : 300
  );

  useEffect(() => {
    const updateFinishLine = () => {
      setFinishLine(window.innerWidth < 768 ? 100 : 300);
    };

    window.addEventListener("resize", updateFinishLine);
    return () => window.removeEventListener("resize", updateFinishLine);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLight((prev) => (prev === "red" ? "green" : "red"));
    }, Math.random() * 3000 + 2000);

    return () => clearInterval(interval);
  }, []);

  const moveForward = () => {
    if (!gameOver && !gameWon) {
      if (light === "green") {
        setPosition((prev) => {
          const newPosition = prev + speed;
          if (newPosition >= finishLine) {
            setGameWon(true);
            return finishLine;
          }
          return newPosition;
        });
      } else {
        setGameOver(true);
      }
    }
  };

  const resetGame = () => {
    setPosition(0);
    setGameOver(false);
    setGameWon(false);
  };

  return (
    <div className="flex max-w-[1200px] border-4 border-pink-600 rounded-xl container m-5 bg-black mx-auto flex-col items-center justify-center h-auto text-white py-10">
      <h1 className="text-4xl text-center font-squid font-extrabold mb-4">
        🚦<strong className="text-red-500">Red Light</strong> ,{" "}
        <strong className="text-green-500">Green Light</strong> 🚦
      </h1>
      <div className="relative flex flex-col items-center space-y-6">
        <div
          className={`w-24 h-24 rounded-full shadow-lg transition-all duration-500 ease-in-out ${
            light === "green" ? "bg-green-500" : "bg-red-500"
          }`}
        ></div>
        <motion.div
          animate={{ x: position }}
          className="w-12 h-12 bg-blue-500 rounded-full shadow-md border-2 border-white"
        ></motion.div>
        <button
          className="px-6 py-3 bg-blue-600 custom-cursor hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105 rounded-lg text-lg font-semibold shadow-lg"
          onClick={moveForward}
          disabled={gameOver || gameWon}
        >
          Move 🚶‍♂️
        </button>
        <button
          className="px-6 py-3 bg-red-600 custom-cursor hover:bg-red-500 transition duration-300 ease-in-out transform hover:scale-105 rounded-lg text-lg font-semibold shadow-lg"
          onClick={resetGame}
        >
          Try Again 🔄
        </button>
        {gameOver && (
          <p className="text-red-500 text-xl font-semibold mt-2">
            ❌ You got caught! Game Over.
          </p>
        )}
        {gameWon && (
          <p className="text-green-500 text-xl font-semibold mt-2">
            🎉 Congratulations! You Won!
          </p>
        )}
      </div>
    </div>
  );
};

export default Game;

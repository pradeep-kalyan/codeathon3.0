import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Prize = ({ text, amount }) => {
  const [animatedAmount, setAnimatedAmount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(amount.replace(/,/g, ""), 10); // Convert string amount to number
    const duration = 10000; // Animation duration in ms
    const stepTime = duration / end;

    if (end > 0) {
      const counter = setInterval(() => {
        start += Math.ceil(end / 100); // Increment smoothly
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setAnimatedAmount(start);
      }, stepTime);
    }
  }, [amount]);

  return (
    <motion.div
      id="prizes"
      whileHover={{ scale: 1.1 }}
      className="w-72 h-auto p-5 flex flex-col justify-center items-center rounded-xl transition-all duration-300 ease-out shadow-xl hover:shadow-pink-500 bg-teal-400"
    >
      <h2 className="text-4xl font-great my-2  font-bold text-red-700">
        {text}
      </h2>
      <h3 className="text-2xl font-courier text-white">
        ₹ {animatedAmount.toLocaleString()}
      </h3>
    </motion.div>
  );
};

const Prizes = () => {
  const prizeList = [
    { text: "🏆 First Prize", amount: "10,000" },
    { text: "🥈 Second Prize", amount: "7,500" },
    // { text: "🥉 Special Prize", amount: "5,000" },
    // { text: "💰 Consolation", amount: "1,000" },
  ];

  return (
    <div className="max-w-[1200px] container mx-auto h-auto p-8 rounded-xl bg-black border-4 border-pink-600">
      <h1 className="font-squid text-4xl text-center bg-gradient-to-b from-pink-500 to-gray-300 bg-clip-text text-transparent m-5 drop-shadow-[0_0_10px_rgba(255,0,0,0.9)]">
        Prizes
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {prizeList.map((prize, index) => (
          <Prize key={index} text={prize.text} amount={prize.amount} />
        ))}
      </div>
    </div>
  );
};

export default Prizes;

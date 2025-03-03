import React from "react";
import Gun from "../../public/assets/images/Gun.png";
import { motion } from "framer-motion";

const Rules = () => {
  return (
    <div
      id="rules"
      className="max-w-[1200px] h-auto p-10 border-4 border-pink-500 bg-black container mx-auto my-6 rounded-2xl shadow-lg flex md:flex-row flex-col justify-around items-center text-white"
    >
      <div>
        {/* Title */}
        <h1 className="font-squid text-4xl text-center bg-gradient-to-b from-pink-500 to-gray-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]">
          Rules & Guidelines
        </h1>

        {/* Rules List */}
        <ul className="flex flex-col space-y-4 mt-6 text-lg text-gray-300 list-none px-6 md:px-12">
          {[
            "Each participant must register individually or as a team.",
            "All submissions must be original and adhere to ethical coding practices.",
            "Use of AI-generated code is allowed but must be properly credited.",
            "The final submission deadline is strictly enforced.",
            "Judging criteria include innovation, efficiency, and presentation.",
          ].map((rule, index) => (
            <li
              key={index}
              className="relative flex items-center text-left bg-gray-800 p-4 rounded-lg border-l-4 border-pink-500 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              {/* Rule Number */}
              <span className="text-pink-400 font-bold text-xl mr-4">
                {index + 1}.
              </span>
              {/* Rule Text */}
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-[250px] hover:scale-10 p-4"
        transition={{ duration: 0.5 }}
      >
        <img
          src={Gun}
          alt="rules"
          className="md:w-[250px] w-[200px]  bg-contain rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </motion.div>
    </div>
  );
};

export default Rules;

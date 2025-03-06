import React from "react";
import Gun from "../assets/images/Gun.png";
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
            "Valid student ID is mandatory and  selected teams must submit a Bonafide certificate.",
            "Teams can have up to 4 members, including 1 lead and 3 members.",
            "Teams must bring their own laptops and other required accessories.",
            "Use of any technology, tools, or IoT sensors is allowed.",
            "Work strictly within the contest venue and no external help or hints permitted.",
            "At least one team member must be actively coding at all times.",
            "No discussion of problems with other teams.",
            "Referees will monitor teams and report any violations.",
            "Any rule violation may lead to disqualification.",
            "Dinner and snacks will be served.",
            "Light refreshments will be available.",
            "It is suggested to bring your extension cords and Wi-Fi dongles.",
          ].map((rule, index) => (
            <li
              key={index}
              className="relative flex font-semibold font-sans items-center text-left bg-gray-800 p-4 rounded-lg border-l-4 border-pink-500 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              {/* Rule Number */}
              <span className="text-pink-400  font-bold text-xl mr-4">
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
        className="w-[350px] hover:scale-10 p-4 justify-center items-center flex "
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

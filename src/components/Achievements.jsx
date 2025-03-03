import React from "react";
import { NavLink } from "react-router-dom";

const Achievements = () => {
  return (
    <div
      id="achievements"
      className="max-w-[1200px] m-[1200px]  container mx-auto bg-black my-6 h-auto rounded-2xl shadow-lg flex flex-col justify-center items-center p-10 text-white border-4 border-pink-500"
    >
      <h1 className="font-squid text-3xl text-center bg-gradient-to-b from-pink-500 to-gray-300 bg-clip-text text-transparent m-5 drop-shadow-[0_0_10px_rgba(255,0,0,0.9)]">
        Achievements
      </h1>
      <ul className="flex flex-wrap justify-center mt-4 gap-4 text-center">
        <NavLink
          to={"/codeathon1"}
          className="text-4xl font-money text-red-500 hover:text-blue-500 border-4 border-pink-600 px-6 py-2 transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          Codeathon 1.0
        </NavLink>
        <NavLink
          to={"/codeathon2"}
          className="font-money text-4xl text-red-500 hover:text-blue-500 border-4 border-pink-600 px-6 py-2 transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          Codeathon 2.0
        </NavLink>
      </ul>
    </div>
  );
};

export default Achievements;

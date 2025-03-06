import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import master from "../assets/images/Master.png";

const Hero = ({ timeLeft, regTime }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      id="home"
      className="container mx-auto m-5 bg-black max-w-[1200px] h-auto rounded-2xl shadow-lg flex flex-col p-8 justify-center items-center text-white border-4 border-pink-500"
    >
      <motion.div
        className="flex justify-center items-center w-[500px] h-auto bg-cover"
        initial={{ opacity: 0.3, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <img
          src={master}
          alt="codeathon3"
          className="rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </motion.div>

      {/* Animated CODEATHON Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center md:text-6xl text-4xl font-bold font-squid bg-gradient-to-b from-pink-600 to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
      >
        CODEATHON 3.0
      </motion.h1>

      {/* Squid Game Style Shapes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex gap-4 mt-4"
      >
        <div className="w-10 h-10 border-4 border-white hover:border-pink-600 rounded-full"></div>
        <div className="w-10 h-10 border-4 border-white hover:border-pink-600"></div>
        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-white hover:border-b-pink-600"></div>
      </motion.div>

      {/* Event Description */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="font-mono text-center text-xl md:text-2xl mt-6 text-gray-300"
      >
        Survive the coding challenges, win the ultimate prize, and become the
        champion. Are you ready? 🔥
      </motion.h2>

      {/* Countdown Timer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center mt-6"
      >
        <h2 className="text-xl font-semibold text-pink-400 uppercase">
          Codeathon Starts in
        </h2>
        {timeLeft ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="flex gap-4 mt-2 md:text-4xl text-3xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,0,0,1)]"
          >
            <span>{timeLeft.days}d</span>:<span>{timeLeft.hours}h</span>:
            <span>{timeLeft.minutes}m</span>:<span>{timeLeft.seconds}s</span>
          </motion.div>
        ) : (
          <h3 className="text-4xl font-bold mt-2 text-red-500">
            Event Started!
          </h3>
        )}
      </motion.div>

      {/* Animated Join Button */}
      <NavLink
        to="/join"
        className="mt-10 px-8 py-4 text-lg font-audio font-semibold text-white bg-pink-500 hover:bg-gradient-to-r from-red-700 to-pink-500 rounded-xl custom-cursor shadow-lg transition duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.9)]"
      >
        Join Us
      </NavLink>

      {/* Registration Timer */}
      {regTime ? (
        <div className="m-5 p-8 flex  justify-center items-center flex-col ">
          <h2 className="text-xl font-semibold text-pink-400 uppercase">
            Registration Ends in
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="flex gap-4 m-5 mt-2 md:text-4xl text-3xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,0,0,1)]"
          >
            <span>{regTime.days}d</span>:<span>{regTime.hours}h</span>:
            <span>{regTime.minutes}m</span>:<span>{regTime.seconds}s</span>
          </motion.div>
        </div>
      ) : (
        <h3 className="text-4xl font-bold mt-2 text-red-500">
          Registration Ended!
        </h3>
      )}
    </motion.div>
  );
};

export default Hero;

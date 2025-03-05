import React from "react";
import { motion } from "framer-motion";
import ticket from "../assets/images/Mask4.png";
import { Link } from "react-router-dom";
import { House } from "lucide-react";

const Join = ({ timeLeft }) => {
  return (
    <div className="container mx-auto w-full flex justify-center items-center md:overflow-hidden overflow-auto m-5">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:w-[700px] w-full m-5 p-8 border-4 border-pink-600 rounded-2xl shadow-xl bg-black flex flex-col items-center justify-center"
      >
        <h2 className="font-squid text-3xl text-center m-5 p-3 bg-gradient-to-b from-pink-600 to-gray-200 bg-clip-text text-transparent">
          ⭕ Join Us 🔺
        </h2>
        <h2 className="font-courier text-xl text-center text-gray-300 m-2">
          Join us as soon as possible because only{" "}
          <span className="font-semibold text-2xl text-center text-wrap">
            {`${timeLeft.days} days ${timeLeft.hours}h ${timeLeft.minutes}m and ${timeLeft.seconds}s `}
          </span>{" "}
          left, and the clock is ticking!
        </h2>
        <div className="flex flex-col justify-center items-center p-3">
          <motion.div
            className="w-[220px] h-[170px]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={ticket}
              alt="Join Us"
              className="w-[220px] h-[170px] object-contain rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </motion.div>
        </div>
        <div className="w-full flex items-center justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScwQ5Fz1ZPBzkJUSEu_C_2FdmqHpw9mpkKqG0KTDBlZKTcXYw/viewform?embedded=true"
            className="w-full md:w-[640px] h-[1560px] md:h-[800px] border-none"
          >
            Loading…
          </iframe>
        </div>
        <Link
          to={"/"}
          smooth={true}
          duration={500}
          className="text-pink-500 hover:text-white  font-squid font-bold text-lg cursor-pointer mt-5"
        >
          <span className="flex justify-center items-center gap-2">
            Go to Home <House size={30} />
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Join;

import React from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Rules from "../components/Rules";
import Contact from "../components/Contact";
import Achievements from "../components/Achievements";
import Prizes from "../components/Prizes";
import Game from "../components/Game";
import Organising from "../components/Organising";

const Home = ({ timeLeft, regTime }) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-green-500 origin-left w-full z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Main page content with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pb-10"
      >
        <Navbar />
        <Hero id="hero" timeLeft={timeLeft} regTime={regTime} />
        <Game />
        <Rules id="rules" />
        <About id="about" />
        <Organising
          id="organising"
          Title="Organising Committee"
          Description="Say hello to the incredible team behind Codeathon 3.0!"
        />
        <Contact
          id="contact"
          Title="Contact Us"
          Description="Have questions? We're here to help!"
        />
        <Achievements id="achievements" />
        <Prizes />
      </motion.div>
    </>
  );
};

export default Home;

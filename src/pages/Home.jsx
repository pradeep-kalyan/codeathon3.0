import React, { useEffect, useState } from "react";
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

const Home = ({ timeLeft }) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll progress line */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-green-500 origin-left w-full z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Page content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pb-10"
      >
        <Navbar />
        <Hero id="hero" timeLeft={timeLeft} />
        <Game />
        <Rules id="rules" />
        <About id="about" />
        <Organising
          id="organising"
          Title={"Organising Commitee"}
          Description={"here is Your wonderful Organising Commitee"}
        />
        <Contact
          id="contact"
          Title={"Contact US"}
          Description={"If you have any doubts feel free to contact our leads"}
        />
        <Achievements id="achievements" />
        <Prizes />
        <h2 className="text-2xl flex justify-end items-end m-5 container mx-auto font-ls text-white">
          Designed By Pradeep Kalyan S <br /> BE/CSE 3rd year <br /> @prathyusha
          engineering college
        </h2>
      </motion.div>
    </>
  );
};

export default Home;

import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full  md:max-w-[1200px] border-4 border-pink-500 bg-black  container mx-auto rounded-2xl shadow-lg h-auto p-8"
    >
      <h1 className="font-squid text-center text-2xl bg-gradient-to-b from-pink-600 to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
        About Us
      </h1>

      <p className="text-gray-300 mt-5 font-courier text-center text-wrap md:text-2xl p-8 text-xl">
        Welcome to <strong>Codeathon</strong> , the ultimate coding challenge
        where innovation meets creativity!{" "}
        <strong>
          Organized by Department OF Computer Science & Engineering,Prathyusha
          Engineering College,
        </strong>{" "}
        this event brings together students, problem-solvers, and tech
        enthusiasts to showcase their coding skills, collaborate on exciting
        projects, and compete for amazing rewards. Whether you're a beginner or
        an expert, Codeathon offers a platform to test your abilities, learn
        from peers, and build something extraordinary. With challenging problem
        statements, mentorship from industry experts, and an opportunity to
        network with like-minded individuals, this is your chance to{" "}
        <strong className="font-semibold text-green-500 tracking-wider text-3xl">
          {" "}
          code, compete, and conquer!{" "}
        </strong>{" "}
        Are you ready to take on the challenge? Join Codeathon and unleash your
        coding potential!" code, compete, and conquer
      </p>
    </div>
  );
};

export default About;

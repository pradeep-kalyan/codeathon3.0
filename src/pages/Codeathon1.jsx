import React from "react";

const Codeathon1 = () => {
  return (
    <div className="w-full h-screen p-5 bg-black/70 flex flex-col justify-center items-center">
      <h2 className="font-ds md:text-4xl text-3xl text-center text-white">
        Codeathon 1.0 Achievements
      </h2>
      <iframe
        width="800"
        height="600"
        className="md:w-[800px] md:h-[600px] mt-10 w-full h-[350px] m-10 custom-cursor "
        src="https://www.youtube.com/embed/6FAhf-aA2YU?si=WbWnMjxb6F58Qnbn"
        title="Codeathon 1.0 "
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Codeathon1;

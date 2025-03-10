import React from "react";
import Contactorg from "./Contactorg";

const Organising = ({ Title, Description }) => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] container mx-auto bg-black my-6 h-auto rounded-2xl shadow-lg flex flex-col justify-center items-center p-10 text-white border-4 border-pink-500"
    >
      {/* Title */}
      <h1 className="font-squid text-3xl text-center bg-gradient-to-b from-pink-500 to-gray-300 bg-clip-text text-transparent m-5 drop-shadow-[0_0_10px_rgba(255,0,0,0.9)]">
        {Title}
      </h1>

      {/* Description */}
      <p className="text-gray-300 font-courier text-lg text-center max-w-[800px]">
        {Description}
      </p>

      {/* Contact List */}
      <div className="flex flex-wrap justify-center items-center mt-6">
        <Contactorg
          name="Dr. W.Thamba Meshach"
          position="HOD/CSE"
          number="+91 98406 17030"
          mail="hod.cse@prathyusha.edu.in"
        />
        <Contactorg
          name="Ms. B.Gunasundari"
          position="Assistant Professor/CSE"
          role="Event Co-ordinator"
          number="+91 98433 58385"
          mail="gunasundari.cse@prathyusha.edu.in"
        />
        <Contactorg
          name="Ms. H.Kezia"
          position="Assistant Professor/CSE"
          role="Event Co-ordinator"
          number="+91 99411 80140"
          mail="kezia.cse@prathyusha.edu.in"
        />
      </div>
    </div>
  );
};

export default Organising;

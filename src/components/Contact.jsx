import React from "react";
import ContactSection from "./contactsection";

const Contact = ({ Title, Description }) => {
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
      <p className="text-gray-300 text-lg text-center max-w-[800px]">
        {Description}
      </p>

      {/* Contact List */}
      <div className="flex flex-wrap justify-center items-center mt-6">
        <ContactSection
          name="Vijay Kumar"
          position="Event Coordinator"
          number="+91 93603 72093"
          mail="babulvijay@gmail.com"
        />
        <ContactSection
          name="Pradeep Kalyan"
          position="Tech Lead"
          number="+91 8148596830"
          mail="pradeepkalyan1275@gmail.com"
        />
        <ContactSection
          name="Dinakaran R"
          position="Marketing Head"
          number="+91 85240 86107"
          mail="example.com"
        />
      </div>
    </div>
  );
};

export default Contact;

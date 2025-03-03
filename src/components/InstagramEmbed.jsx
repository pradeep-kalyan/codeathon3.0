import React, { useEffect } from "react";

const InstagramEmbed = ({ url, text }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return (
    <div className="flex flex-col p-3 justify-center items-center transition-all duration-300 transform hover:scale-105 hover:shadow-red-500 hover:shadow-lg">
      <blockquote
        className="flex justify-center cursor-pointer items-center border-4 border-red-500 instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        data-instgrm-media-type="video"
        style={{
          background: "#000",
          color: "#fff",
          border: "4px solid red",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(255,0,0,0.8)",
          margin: "10px",
          maxWidth: "400px",
          minWidth: "200px",
          padding: "10px",
          width: "calc(100% - 20px)",
        }}
      ></blockquote>
      <p className="text-red-500 font-bold mt-2 text-2xl font-audio">{text}</p>
    </div>
  );
};

export default InstagramEmbed;

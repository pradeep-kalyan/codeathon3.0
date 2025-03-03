import React, { useState, useEffect } from "react";
import InstagramEmbed from "../components/InstagramEmbed";
import { ClipLoader } from "react-spinners";

const embedData = [
  { url: "https://www.instagram.com/reel/C4lFT8Kx0Op/", text: "Theme Reveal" },
  { url: "https://www.instagram.com/p/C4abYNRxF4M/", text: "Poster" },
  { url: "https://www.instagram.com/reel/C4hurvsrD38/", text: "Promo 1" },
  { url: "https://www.instagram.com/reel/C4nnldiRL_I/", text: "Promo 2" },
  { url: "https://www.instagram.com/reel/C4c5wR4RjRl/", text: "Promo 3" },
  {
    url: "https://www.instagram.com/reel/C4aYuLHxI4h/",
    text: "Teaser Video 1",
  },
  { url: "https://www.instagram.com/reel/C40EQoiRjvz/", text: "Event Day" },
  { url: "https://www.instagram.com/reel/C40ek_hxHAs/", text: "Codeathon Day" },
  { url: "https://www.instagram.com/reel/C41fTawvITV/", text: "Codeathon Day" },
  { url: "https://www.instagram.com/reel/C48EPtQxkao/", text: "Codeathon Day" },
];

const Codeathon2 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating embed loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black/70 text-white">
      <div className="container mx-auto p-5">
        <h2 className="font-bold font-money text-5xl m-5 p-5 text-red-500 text-center shadow-lg">
          Codeathon 2.0
        </h2>

        {loading ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <ClipLoader color="#FF0000" size={50} />
          </div>
        ) : (
          <div className="flex flex-wrap justify-around items-start gap-7 m-2 p-4">
            {embedData.map((embed, index) => (
              <InstagramEmbed key={index} url={embed.url} text={embed.text} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Codeathon2;

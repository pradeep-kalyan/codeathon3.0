import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Join from "./pages/Join";
import { useEffect, useState } from "react";
import Codeathon1 from "./pages/Codeathon1";
import Codeathon2 from "./pages/Codeathon2";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  // const [count, setCount] = useState(0);

  const eventDate = new Date("2025-03-25T10:00:00").getTime(); // Set event date & time

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null; // Event started
  };

  const [time, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home timeLeft={time} />} />
        <SpeedInsights />
        <Route path="/join" element={<Join timeLeft={time} />} />
        <Route path="/codeathon1" element={<Codeathon1 />} />
        <Route path="/codeathon2" element={<Codeathon2 />} />
      </Routes>
    </Router>
  );
}

export default App;

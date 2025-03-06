import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Codeathon1 from "./pages/Codeathon1";
import Codeathon2 from "./pages/Codeathon2";

function App() {
  // Set event and registration deadlines
  const eventDate = new Date("2025-03-25T10:00:00").getTime();
  const regDate = new Date("2025-03-22T10:00:00").getTime();

  // Calculate remaining time
  const calculateTimeLeft = (targetDate) => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null; // Event started or registration closed
  };

  // State for countdown timers
  const [eventTime, setEventTime] = useState(calculateTimeLeft(eventDate));
  const [regTime, setRegTime] = useState(calculateTimeLeft(regDate));

  // Timer to update countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setEventTime(calculateTimeLeft(eventDate));
      setRegTime(calculateTimeLeft(regDate));
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home timeLeft={eventTime} regTime={regTime} />}
        />
        <Route path="/join" element={<Join timeLeft={regTime} />} />
        <Route path="/codeathon1" element={<Codeathon1 />} />
        <Route path="/codeathon2" element={<Codeathon2 />} />
      </Routes>
    </Router>
  );
}

export default App;

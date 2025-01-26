import React, { useState, useEffect } from "react";

const DailyQuote = () => {
  const quotes = [
    "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "The expert in anything was once a beginner. – Helen Hayes",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Study hard, for the well is deep, and our brains are shallow. – Richard Baxter",
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. – Malcolm X",
    "The beautiful thing about learning is that nobody can take it away from you. – B.B. King",
    "Success doesn’t come to you, you go to it. – Marva Collins",
    "There are no secrets to success. It is the result of preparation, hard work, and learning from failure. – Colin Powell",
    "Learning is not attained by chance; it must be sought for with ardor and attended to with diligence. – Abigail Adams",
  ];

  const [currentQuote, setCurrentQuote] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setCurrentQuote(quotes[index]);
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % quotes.length;
        setCurrentQuote(quotes[nextIndex]);
        return nextIndex;
      });
    }, 60000);

    return () => clearInterval(intervalId);
  }, [quotes]);

  return (
    <div className="quotes-section">
      <p>"{currentQuote}"</p>
    </div>
  );
};

export default DailyQuote;

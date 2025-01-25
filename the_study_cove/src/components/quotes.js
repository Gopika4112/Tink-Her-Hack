import React, { useState, useEffect } from "react";

const DailyQuote = () => {
  // Array of study-related quotes
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
  const [index, setIndex] = useState(0); // State for the current quote index

  useEffect(() => {
    // Set the initial quote
    setCurrentQuote(quotes[index]);

    // Update the quote every minute
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % quotes.length; // Increment and wrap around
        setCurrentQuote(quotes[nextIndex]); // Update the quote
        return nextIndex; // Update the index state
      });
    }, 60000); // 1 minute

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, [quotes]); // Effect depends on the quotes array

  return (
    
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        textAlign: "center",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p
        style={{
          fontSize: "18px",
          fontStyle: "italic",
          color: "#555",
        }}
      >
        "{currentQuote}"
      </p>
    </div>
  );
};

export default DailyQuote;
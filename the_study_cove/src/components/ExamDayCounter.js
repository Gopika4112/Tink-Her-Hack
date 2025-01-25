import React, { useState, useEffect } from "react";

const ExamDayCounter = () => {
  const [examDate, setExamDate] = useState("");
  const [daysLeft, setDaysLeft] = useState(null);

  useEffect(() => {
    if (examDate) {
      const calculateDaysLeft = () => {
        const today = new Date();
        const exam = new Date(examDate);
        const difference = Math.ceil((exam - today) / (1000 * 60 * 60 * 24));
        setDaysLeft(difference >= 0 ? difference : 0);
      };

      calculateDaysLeft();
    }
  }, [examDate]);

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center" }}>
      <h2>Exam Day Counter</h2>
      <input
        type="date"
        value={examDate}
        onChange={(e) => setExamDate(e.target.value)}
        style={{
          padding: "8px",
          fontSize: "16px",
          margin: "10px 0",
          width: "100%",
        }}
      />
      <button
        onClick={() => setExamDate("")}
        style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Clear
      </button>
      {daysLeft !== null && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          {daysLeft > 0
            ? `Days left until the exam: ${daysLeft}`
            : "The exam date has passed or is today!"}
        </p>
      )}
    </div>
  );
};

export default ExamDayCounter;

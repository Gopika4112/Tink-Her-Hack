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
      {daysLeft === null ? (
        <p style={{ marginBottom: "10px", fontSize: "18px" }}>
          Enter your exam date:
        </p>
      ) : (
        <>
          <p
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#a97882",
              margin: "5px 0",
            }}
          >
            Exam in
          </p>
          <p
            style={{
              fontSize: "70px",
              fontWeight: "bold",
              color: "#a97882",
              margin: "5px 0",
            }}
          >
            {daysLeft > 0 ? daysLeft : "0"}
          </p>
          <p
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#a97882",
              margin: "5px 0",
            }}
          >
            {daysLeft === 1 ? "day" : "days"}
          </p>
        </>
      )}

      {/* Only show input if no exam date has been selected yet */}
      {daysLeft === null && (
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
      )}
    </div>
  );
};

export default ExamDayCounter;

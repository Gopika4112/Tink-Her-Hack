import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StudyRoom from "./pages/StudyRoom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/study-room" element={<StudyRoom />} />
      </Routes>
    </Router>
  );
}

export default App;


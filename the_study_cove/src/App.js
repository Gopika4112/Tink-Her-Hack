import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StudyRoom from "./pages/StudyRoom";

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/study-room" element={<StudyRoom />} />
      </Routes>
    </Router>
=======
    <div className="App">
      <HomePage/>

      
    </div>
>>>>>>> aa86bd2a1d6509a337f89be645839529a2f21147
  );
}

export default App;


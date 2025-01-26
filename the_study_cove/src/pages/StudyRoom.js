import React from 'react';
import ToDo from '../components/ToDo';
import Quotes from '../components/Quotes';
import ExamDayCounter from '../components/ExamDayCounter';
import PomodoroTimer from '../components/PomodoroTimer';
import '../styles/StudyRoom.css';

const StudyRoom = () => {
  return (
    <div className="study-room-container">
      <div className="todo-section">
        <ToDo />
      </div>
      <div className="main-content">
        <div className="quotes-section">
          <Quotes />
        </div>
        <div className="timer-section">
          <PomodoroTimer />
        </div>

        <div className="exam-countdown-section">
          <ExamDayCounter />
        </div>
      </div>
    </div>
  );
};

export default StudyRoom;
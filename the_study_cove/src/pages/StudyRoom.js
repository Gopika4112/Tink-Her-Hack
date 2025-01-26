import React from 'react';
import ToDo from '../components/ToDo';
import Quotes from '../components/Quotes';
import ExamDayCounter from '../components/ExamDayCounter';
import PomodoroTimer from '../components/PomodoroTimer';
import '../styles/StudyRoom.css';
import WhiteNoisePlayer from '../components/whitesound';

const StudyRoom = () => {
  return (
    <div className="study-room-container">
      <h1 className='heading'>LET'S GET TO IT!</h1>
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
        <div className="white-noise">
          <WhiteNoisePlayer/>
        </div>
      </div>
    </div>
  );
};

export default StudyRoom;
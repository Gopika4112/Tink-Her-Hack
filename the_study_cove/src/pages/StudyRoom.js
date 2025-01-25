import React, { useState } from 'react';
import ToDo from '../components/ToDo';
import Quotes from '../components/Quotes';
import ExamDayCounter from '../components/ExamDayCounter';
import PomodoroTimer from '../components/PomodoroTimer';
import '../styles/StudyRoom.css';

const StudyRoom = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');



  return (
    <div className="container">
      {/* Left Sidebar-To-Do List */}
      <ToDo />

      {/* Main Content */}
      <div className="main-content">
        <div className="exam-countdown">
          <ExamDayCounter />
        </div>
        <div className="Quotes">
          <h3>A quote for you!</h3>
          <Quotes />
        </div>
        <div className="Pomodoro">
          <h3>Timer</h3>
          <PomodoroTimer/>
        </div>
      </div>
    </div>
  );
};

export default StudyRoom;

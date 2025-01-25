import React, { useState } from 'react';
import ToDo from '../components/ToDo';
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
          <h3>Exam countdown</h3>
        </div>
        
      </div>
    </div>
  );
};

export default StudyRoom;

import React, { useState, useEffect } from 'react';
import "../styles/PomodoroTimer.css";

const PomodoroTimer = () => {
    const [isActive, setIsActive] = useState(false);
    const [timeLeft, setTimeLeft] = useState(25 * 60); // Default work time: 25 minutes
    const [isBreak, setIsBreak] = useState(false);

    // State to hold custom work and break durations
    const [workDuration, setWorkDuration] = useState('25'); // Work duration as string to handle backspace
    const [breakDuration, setBreakDuration] = useState('5'); // Break duration as string

    // Function to toggle the timer (start or pause)
    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    // Function to reset the timer
    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(parseInt(workDuration) * 60); // Reset to work duration
        setIsBreak(false); // Reset to work session
    };

    // Handle input changes for work and break durations
    const handleWorkDurationChange = (e) => {
        let value = e.target.value;
        if (value === '' || /^[0-9]+$/.test(value)) {
            setWorkDuration(value);
            if (value !== '') {
                setTimeLeft(parseInt(value) * 60);  // Update the time left when work duration changes
            }
        }
    };

    const handleBreakDurationChange = (e) => {
        let value = e.target.value;
        if (value === '' || ['5', '10', '15', '30'].includes(value)) {
            setBreakDuration(value);
        }
    };

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 0) {
                        // Switch between work and break session
                        setIsBreak(!isBreak);
                        return isBreak ? parseInt(workDuration) * 60 : parseInt(breakDuration) * 60;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, isBreak, workDuration, breakDuration]);

    // Format time to MM:SS
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className="pomodoro-timer">
            <h2>{isBreak ? "Break Time" : "Work Time"}</h2>

            {/* Display Timer */}
            <div className="timer-display">
                <h1>{formatTime(timeLeft)}</h1>
            </div>

            {/* Control Buttons */}
            <div className="buttons">
                <button onClick={toggleTimer}>
                    {isActive ? "Pause" : "Start"}
                </button>
                <button onClick={resetTimer}>Reset</button>
            </div>

            {/* Duration Settings */}
            <div className="settings">
                <div>
                    <label>Work Duration (min): </label>
                    <input
                        type="text"
                        value={workDuration}
                        onChange={handleWorkDurationChange}
                        min="1"
                    />
                </div>
                <div>
                    <label>Break Duration (min): </label>
                    <select onChange={handleBreakDurationChange} value={breakDuration}>
                        <option value="5">5 minutes</option>
                        <option value="10">10 minutes</option>
                        <option value="15">15 minutes</option>
                        <option value="30">30 minutes</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default PomodoroTimer;

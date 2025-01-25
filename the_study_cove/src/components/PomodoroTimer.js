import React, { useState, useEffect } from 'react';
import "../styles/PomodoroTimer.css"

const PomodoroTimer = () => {
    const [isActive, setIsActive] = useState(false);
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isBreak, setIsBreak] = useState(false);

    // Function to toggle the timer (start or pause)
    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    // Function to reset the timer
    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(25 * 60); // Reset to 25 minutes
        setIsBreak(false); // Reset to work session
    };

    useEffect(()=>{
        let interval=null;

        if(isActive){
            interval=setInterval(()=>{
                setTimeLeft(prevTime=>{
                    if(prevTime<=0){
                        setIsBreak(!isBreak);
                        return isBreak?25*60:5*60;
                    }
                    return prevTime-1
                })
            },1000);
        }else{
            //if timer is paused, clear the interval
            clearInterval(interval);
        }
        return()=>clearInterval(interval);
    },[isActive, isBreak]);
    return (
        <div className="pomodoro-timer">
            
            <div className="timer-display">
            <h2>{`${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`}</h2>

            </div>

            <div className="buttons">
                <button onClick={toggleTimer}>
                    {isActive ? "Pause" : "Start"}
                </button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default PomodoroTimer;

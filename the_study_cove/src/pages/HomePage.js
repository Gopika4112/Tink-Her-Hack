import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css"
import FeatureBox from "../components/FeatureBox";
import { FaClock, FaTrophy, FaList, FaUserGraduate, FaUsers } from "react-icons/fa";

const HomePage=()=>{
    const navigate = useNavigate();

    return(
        <div>
            <nav>
                <h1>The Study Cove</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="hero">
                <h2>Welcome to The Study Cove</h2>
                <p>Your virtual study room for collaboration and focus.</p>
                <button onClick={() => navigate('/study-room')}>
                    Study session
                </button>
            </div>

            <div className="features-section">
                <FeatureBox
                    icon={<FaUserGraduate/>}
                    title="Study Individually"
                    description="Focus on your work without distractions."
                    onClick={() => navigate("/study-room")}
                />
                <FeatureBox
                    icon={<FaUsers/>}
                    title="Study With Friends"
                    description="Collaborate and learn together in virtual rooms."
                />
                <FeatureBox
                    icon={<FaClock/>}
                    title="Stay Motivated"
                    description="Keep yourself on track with Pomodoro Timer, organize your tasks with To-Do List, 
                    and track your progress with the Leaderboard."
                />
                                
            </div>
        </div>
    );
};

export default HomePage;
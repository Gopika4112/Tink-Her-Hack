import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css"
import FeatureBox from "../components/FeatureBox";
import { FaClock, FaMusic, FaListAlt } from "react-icons/fa";

const HomePage=()=>{
    const navigate = useNavigate();

    return(
        <div>
            <nav>
                <h1>The Study Cove</h1>
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
                icon={<FaListAlt />} // To-Do List icon
                title="To-Do List"
                description="Organize your tasks efficiently and stay productive."
                onClick={() => navigate("/todo-list")} // Add navigation route if required
            />
            <FeatureBox
                icon={<FaClock />}
                title="Pomodoro Timer"
                description="Boost your productivity with timed work sessions."
                onClick={() => navigate("/pomodoro-timer")} // Add navigation route if required
            />
            <FeatureBox
                icon={<FaMusic />}
                title="Focus Music"
                description="Relax and stay focused with curated background music."
                onClick={() => navigate("/focus-music")} // Add navigation route if required
            />
                                
            </div>
        </div>
    );
};

export default HomePage;
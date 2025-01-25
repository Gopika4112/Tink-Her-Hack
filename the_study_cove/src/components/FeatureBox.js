import React from "react"
import "../styles/FeatureBox.css";
import { FaClock, FaTrophy, FaList, FaUserGraduate, FaUsers } from "react-icons/fa";

const FeatureBox=({icon,title,description})=>{
    return(
        <div className="feature-box">
            <i className="feature-icon">{icon}</i>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default FeatureBox;
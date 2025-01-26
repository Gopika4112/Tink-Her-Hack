import React, { useState, useRef } from "react";

const WhiteNoisePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio
        ref={audioRef}
        loop
        src="https://www.fesliyanstudios.com/play-mp3/700" // Replace with your desired audio source
      ></audio>
      <button
        onClick={togglePlayPause}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px 20px",
          margin:"0 100px",
          backgroundColor: "#a97882",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        {isPlaying ? "Pause" : "Focus Music"}
      </button>
    </div>
  );
};

export default WhiteNoisePlayer;

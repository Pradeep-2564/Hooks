import React, { useState, useEffect } from 'react';
import './Style.css'; 

const Timer = () => {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let timeoutId;

    if (isRunning) {
      timeoutId = setTimeout(() => {
        setTime(prevTime => prevTime + 1); 
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [isRunning, time]);


  useEffect(() => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    document.title = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }, [time]);


  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="container">
      <h2>Stopwatch</h2>
      <h2 className="timer">{formatTime(time)}</h2>
      <div className="buttons">
        {isRunning ? (
          <button onClick={pauseTimer} className="button">Pause</button>
        ) : (
          <button onClick={startTimer} className="button">Resume</button>
        )}
        <button onClick={resetTimer} className="button">Reset</button>
      </div>
    </div>
  );
};

export default Timer;

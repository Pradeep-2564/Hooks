import React, { useState, useEffect } from 'react';
import './Style.css'

const Timer = () => {
  const [time, setTime] = useState(0); // time in seconds
  const [isRunning, setIsRunning] = useState(false); // whether the timer is running
  const [isPaused, setIsPaused] = useState(false); // whether the timer is paused

  // Start the timer when the component mounts
  useEffect(() => {
    let interval;
    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    // Cleanup the interval when the component unmounts or timer is stopped
    return () => clearInterval(interval);
  }, [isRunning, isPaused]);

  // Update document title with the current time
  useEffect(() => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    document.title = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, [time]);

  const handlePause = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    setIsPaused(false);
  };

  // Format time as hh:mm:ss
  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='container'>
      <h1>{formatTime()}</h1>
      {!isRunning && !isPaused && (
        <button onClick={() => setIsRunning(true)}>Start</button>
      )}
      {isRunning && !isPaused && (
        <button onClick={handlePause}>Pause</button>
      )}
      {isPaused && (
        <button onClick={handleResume}>Resume</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;

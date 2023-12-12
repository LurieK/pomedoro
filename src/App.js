import logo from './logo.svg';
import './App.css';
import Buttons from './components/buttons'
import Timer from './components/timer';
import Tracker from './components/tracker';
import Ding from './components/ding'
import Goal from './components/goal'

import React, {useState, useEffect} from 'react'

function App() {
    const workDuration = 25*60; // 25 minutes in seconds
  const breakDuration =5*60; // 5 minutes in seconds
  const [working, setworking] = useState(true);
  const [countDownTime, setCountDownTime] = useState(workDuration);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && countDownTime > 0) {
      interval = setInterval(() => {
        setCountDownTime(countDownTime - 1); 
      }, 1000);
    }
    
    if (countDownTime === 0) {
      const switchSession = !working;
      setworking(switchSession);
      setCountDownTime(switchSession ? workDuration : breakDuration);
      setIsActive(true); // continue timer for each session
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isActive, countDownTime, working]);

  const handlePause = () => {
    setIsActive(false);//stop timer and countdown
  };

  const handlePlay = () => {
    //begin timer
    setIsActive(true);
  };

  const handleRestart = () => {
    setCountDownTime(working ? workDuration : breakDuration);
    //based on what timer is running the time is reset to 00:00
    setIsActive(false);
    //this will not effect the Tracker. 
  };

  return (
  <div className='App'>
    <Timer 
        working={working}
        time={countDownTime}
        />
    <Buttons 
        work={working}
        time={countDownTime}
        active={isActive}
        onPause={handlePause}
        onPlay={handlePlay}
        onRestart={handleRestart}
      />
    <Goal/>
    <Tracker
        working = {working}
        active= {isActive}
      />
    <Ding 
        time = {countDownTime}
      />

  </div>

  )
}

export default App;

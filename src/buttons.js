

import React, { useState, useEffect } from 'react';
import Timer from './timer';
import Tracker from './tracker';
import Ding from './ding'
import Goal from './goal'

const Buttons= ()=>{
  const workDuration = 10; // 25 minutes in seconds
  const breakDuration =5; // 5 minutes in seconds
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
      setIsActive(true); // Optionally pause the timer on session switch
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isActive, countDownTime, working]);

  const handlePause = () => {
    setIsActive(false);
  };

  const handlePlay = () => {
  console.log(`timer is starting`)
    setIsActive(true);
  };

  const handleRestart = () => {
    setCountDownTime(working ? workDuration : breakDuration);
    setIsActive(false);
  };
   

    return(
    <div className='start'>
      <div>
      <Timer 
        working={working}
        countDown={countDownTime}
        />
      <button onClick={handlePause}>Pause</button>
      <button onClick={isActive ? handleRestart : handlePlay}>{isActive? 'restart' : 'Play'}</button>
      </div>
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
export default Buttons


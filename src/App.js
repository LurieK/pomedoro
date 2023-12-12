
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
    //so long as the timer is active and countDownTime is greater then zero
    //the interval will contine to decrease by one every second
    if (isActive && countDownTime > 0) {
      interval = setInterval(() => {
        setCountDownTime(countDownTime - 1); 
      }, 1000);
    }
    //once countDownTime hits zero working turns to false and the session switches to break (counting down from 5 minues)
    //if it turns to true it counts then the timer tracks 25 mintues (workDuration)
    if (countDownTime === 0) {
      const switchSession = !working;
      setworking(switchSession);
      setCountDownTime(switchSession ? workDuration : breakDuration);
      setIsActive(true);
      //Cleanup: Clear the interval when the component unmounts or before the useEffect runs again due to changes in its dependencies (isActive, countDownTime, working). 
      //This prevents multiple intervals from running simultaneously and ensures that only the latest interval is active."
    }

    return () => clearInterval(interval); // Clear interval for new countdown
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


import React from 'react'
import {useRef, useEffect} from 'react'

const Tracker=(props)=> {

    const totalTimeRef = useRef(0);
    const prevWorking = useRef(props.working)
    console.log(props.working)
    
    
    useEffect(()=> {
    //is this the first time useEffect is running?
      if (prevWorking.current === props.working) {
      return;

      //then add the currect value based on which timer just completed
      //if working is false then the 25min counter just stopped, otherwise 5 min break just stopped. 
    }else{
        totalTimeRef.current += !props.working? 25 : 5
    }
        //set prevWorking to the working status we just went through
        prevWorking.current = props.working;

    }, [props.working]);
    

return(

    <div>
        <p>You've been working 
        {//if the timer isn't active then the time should be set to 00:00
        !props.active ? 
        ' 00:00 hours!' :
        ` ${Math.floor(totalTimeRef.current / 60)}:${String(totalTimeRef.current % 60).padStart(2, '0')} hours!`
    }</p>
    </div>
)

}

export default Tracker
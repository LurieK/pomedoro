//useRef
//hold a counter
//hits zero add 25, hits zero add 5, and repeat
//return the total 
import React from 'react'
import {useRef, useEffect} from 'react'

const Tracker=(props)=> {

    const totalTimeRef = useRef(-50)

    useEffect(()=> {
        totalTimeRef.current += props.working ? 25 :5;
    
    }, [props.working]);
    

return(

    <div>
        <p>You've been working 
        {
        !props.active ? 
        ' 0:00 hours!' :
        ` ${Math.floor(totalTimeRef.current / 60)}:${String(totalTimeRef.current % 60).padStart(2, '0')} hours!`
    }</p>
    </div>
)

}

export default Tracker
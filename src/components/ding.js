import ding from '../call-to-attention-123107.mp3'
import React, {useState} from 'react'
import muteImg from '../volume_off_FILL0_wght400_GRAD0_opsz24.png'
import soundImg from '../volume_up_FILL0_wght400_GRAD0_opsz24.png'


const Ding = (props) =>{
//mute starts as false so the ding sounds on default
const [mute, setMute] = useState(false)

//on click state flips to muted
function muteDing(){
    setMute(prevMute => !prevMute)
}
//when timer hits zero the sound plays inless state is true
function play (){
    if (props.time === 0 && !mute){
        const audio = new Audio(ding);
        audio.play() 
    }

}

play();


return (

    <div className= 'mute-button'>
        {/* renders sound icon based on state */}
        <img src={mute ? muteImg : soundImg} onClick={muteDing}/>
    </div>

)

}


export default Ding
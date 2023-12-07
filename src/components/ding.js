import ding from '../call-to-attention-123107.mp3'
import React, {useState} from 'react'
import muteImg from '../volume_off_FILL0_wght400_GRAD0_opsz24.png'
import soundImg from '../volume_up_FILL0_wght400_GRAD0_opsz24.png'


const Ding = (props) =>{

const [mute, setMute] = useState(false)

function muteDing(){
    setMute(prevMute => !prevMute)
}

function play (){
    if (props.time === 0 && !mute){
        const audio = new Audio(ding);
        audio.play() 
    }

}

play();


return (

    <div className= 'mute-button'>
        <img src={mute ? muteImg : soundImg} onClick={muteDing}/>
    </div>

)

}


export default Ding

import React, {useState} from 'react'


const Goal=()=>{
        const [goal, setGoal] = useState('')
        const [goalText, setGoalText] = useState('')
        

        const handleSubmit = (e) => {
            e.preventDefault();
            if (!goalText.trim()) {
            return;
          }

        setGoal(goalText)
        setGoalText('')
    }


    return(
        <div className='goal-form'>
            <h4 >Goal for this session : </h4>
            <h3 className='goal-written'>{goal}</h3>
            <form
            className='goalText'
            onSubmit={(e) => handleSubmit(e)}
            >
          <input
            type="text"
            onChange={(e) => setGoalText(e.target.value)}
            placeholder=' type your goal here'
            value={goalText}
          />
          <button type="submit">Enter</button>
        </form>

        
        </div>
    )
}
export default Goal



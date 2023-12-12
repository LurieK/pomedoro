
import React, {useState} from 'react'


const Goal=()=>{

      //states for checking the input value (goalText) and the submitted goal (goal)
        const [goal, setGoal] = useState('')
        const [goalText, setGoalText] = useState('')
        
    //on submit the text in the input is set to goal
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



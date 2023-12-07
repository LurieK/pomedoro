
const Timer=(props)=>{

return (
    <div className={props.working? 'timer-green': 'timer-blue'}>
      <h1>{props.working ? 'Work Time' : 'Break Time'}</h1>
      <div className='timer-text'>
        <h3>{Math.floor(props.time / 60)}:{String(props.time % 60).padStart(2, '0')}</h3>
     </div>
    </div>
)

}
export default Timer

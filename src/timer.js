
const Timer=(props)=>{

return (
    <div className={props.working? 'timer-green': 'timer-blue'}>
      <h1>{props.working ? 'Work Time' : 'Break Time'}</h1>
      <div className='timer-text'>
        <p>{Math.floor(props.countDown / 60)}:{String(props.countDown % 60).padStart(2, '0')}</p>
     </div>
    </div>
)

}
export default Timer

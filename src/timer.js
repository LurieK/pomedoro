
const Timer=(props)=>{

return (
    <div className='timer'>
      <h1>{props.working ? 'Work Time' : 'Break Time'}</h1>
      <p>{Math.floor(props.countDown / 60)}:{String(props.countDown % 60).padStart(2, '0')}</p>
    </div>
)

}
export default Timer

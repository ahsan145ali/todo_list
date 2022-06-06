import React from 'react'

import './DisplayTask.css'
import TaskDate from './TaskDate'
const DisplayTask = ({task}) => {
  return (
    <>
      <div className='task'>
         <h3>Task: {task.task}</h3>
         <TaskDate date = {task.date}/>
         
      </div>
    </>
  )
}

export default DisplayTask

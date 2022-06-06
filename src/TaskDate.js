import React from 'react'

const TaskDate = ({date}) => {

    const month = date.toLocaleString('en-US',{month:'long'});
    const day = date.toLocaleString('en-US',{day:'2-digit'});
    const year = date.getFullYear();
  return (
    <div >
        <div><b>Date: </b> {day} / {month}/ {year}</div>
  </div> 
  )
}

export default TaskDate

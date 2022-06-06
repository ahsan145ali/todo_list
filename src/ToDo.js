import React, { useState } from 'react'

import './ToDo.css';
import DisplayTask from './DisplayTask';
import NewTask from './Newtask/NewTask';
const ToDoList = [
    {   
        id : '1',
        task: 'test',
        date: new Date(2020, 7, 14),
    },
    {   
        id:'2',
        task: 'test2',
        date: new Date(2020, 6, 14),
    },
]

const ToDo = () => {
    
    const [AddTask , setAddTask] = useState(0);
    const ChangeState = () => {
       setAddTask(0);
    }
    const handleAddTask =  (event) =>{
        event.preventDefault();
        setAddTask(1);
        console.log(AddTask);
    }

    const NewTaskHandler = (newtask) =>{
        ToDoList.push(newtask);
        window.alert('New Task Added');
    }

  return (
    <div className='MAIN'>
        <button onClick={handleAddTask}>Add New Task</button>
      <div className='Tasks'>
        {ToDoList.map((TASK)=>(
            <div key={TASK.id} className="Display">
                <DisplayTask task= {TASK}/>
                <br/> 
           </div>
        ))}
      </div>
      {AddTask == 1 ? 
      
        <NewTask ChangeState = {ChangeState} NewTaskHandler = {NewTaskHandler}/>
       : null}
    </div>
  )
}

export default ToDo;

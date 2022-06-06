import React, { useState } from 'react'

import './ToDo.css';
import DisplayTask from './DisplayTask';
import NewTask from './Newtask/NewTask';

const ToDo = () => {
    
    const [ToDoList , setToDoList] = useState([
      
    ]);
    //setToDoList(temp);



    const NewTaskHandler = (newtask) =>{
        setToDoList(oldData => [...oldData,newtask]);
       // window.alert('New Task Added');
        console.log(ToDoList);
    }

  return (
    <div className='MAIN'>
        <NewTask NewTaskHandler = {NewTaskHandler}/>
      <div className='Tasks'>
        {ToDoList.map((TASK)=>(
            <div key={TASK.id} className="Display">
                <DisplayTask task= {TASK}/>
                <br/> 
           </div>
        ))}
      </div>
    </div>
  )
}

export default ToDo;

import React, { useState } from 'react'
import { Paper } from '@material-ui/core'
import './ToDo.css';
import DisplayTask from './DisplayTask';
import NewTask from './Newtask/NewTask';

const ToDo = () => {
    
    const [ToDoList , setToDoList] = useState([
      {
            id : 1,
            task : 'fasf',
            date : new Date(12)
      }
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
      <Paper  className='paper' variant="elevation" elevation={21} >
        {ToDoList.map((TASK)=>(
            <div key={TASK.id} className="Display">
                <DisplayTask task= {TASK}/>
                <br/> 
           </div>
        ))}
        </Paper>
      </div>
    </div>
  )
}

export default ToDo;

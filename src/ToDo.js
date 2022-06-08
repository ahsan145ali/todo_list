import React, { useState,useEffect } from 'react'
import { Paper } from '@material-ui/core'
import './ToDo.css';
import DisplayTask from './DisplayTask';
import NewTask from './Newtask/NewTask';

const ToDo = () => {
    
    const [ToDoList , setToDoList] = useState([
      {
            id : 1,
            task : 'Test Task',
            desc : 'THIS IS JUST FOR TESTING',
            date: Date.now()

      }
    ]);

    const NewTaskHandler = (newtask) =>{
        setToDoList(oldData => [...oldData,newtask]);
        window.localStorage.setItem('ToDoList', JSON.stringify(ToDoList));
    }



    useEffect(() => {
      
      const list = JSON.parse(window.localStorage.getItem('ToDoList'));
      if (list) {
       setToDoList(list);
      }
    }, []);

  return (
    <div className='MAIN'>
        <div className='NewTask'>
        <NewTask NewTaskHandler = {NewTaskHandler}/>
        </div>
      <div className='Tasks'>
      <Paper  className='paper' variant="elevation" elevation={21} >
        {[...ToDoList].reverse().map((TASK)=>(
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

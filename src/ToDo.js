import React, { useState,useEffect } from 'react'
import { Paper } from '@material-ui/core'
import './ToDo.css';
import DisplayTask from './DisplayTask';
import NewTask from './Newtask/NewTask';
import { useSelector,useDispatch } from 'react-redux';

const ToDo = () => {
   
   const dispatch = useDispatch();
   const ToDoList = useSelector( state => state.todos ); // from Redux Store
   
   /*const [ToDoList , setToDoList] = useState([
      {
            id : 1,
            task : 'Test Task',
            desc : 'THIS IS JUST FOR TESTING',
            date: Date.now()

      }
    ]);*/

    const NewTaskHandler = (newtask) =>{
        //setToDoList(oldData => [...oldData,newtask]);
        dispatch({type:'addTask' , obj:newtask});
    }

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

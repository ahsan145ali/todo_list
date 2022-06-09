import React, { useState,useEffect } from 'react'
import { Paper } from '@material-ui/core'
import './ToDo.css';
import DisplayTask from './DisplayTask';
import NewTask from './Newtask/NewTask';
import { useSelector,useDispatch } from 'react-redux';
import Axios from "axios";
const ToDo = () => {
   
   const dispatch = useDispatch();
   const ToDoList = useSelector( state => state.todos ); // from Redux Store

   const [loading,setloading]  = useState(false);
   
   /*const [ToDoList , setToDoList] = useState([
      {
            id : 1,
            task : 'Test Task',
            desc : 'THIS IS JUST FOR TESTING',
            date: Date.now()

      }
    ]);*/

    const NewTaskHandler = async (newtask) =>{
    
        dispatch({type:'addTask' , obj:newtask});

          const url = "http://localhost:3001/";
          setloading(true);
         await Axios.post( url , {newTask: newtask})
            .then( response=>{
                  try{
                      setloading(false);
                  }catch(error){
                alert(error);
              }
            }
            )
    
        
        
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
     { loading ? <h2>IS LOADING</h2> : <h2>LOADED</h2>}
    </div>
  )
}

export default ToDo;

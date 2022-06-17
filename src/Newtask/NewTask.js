import React , {useState} from 'react'
import './NewTask.css';
import uuid from 'react-uuid';
import { useSelector,useDispatch } from 'react-redux';

const NewTask = ({ NewTaskHandler}) => {
    
  const current_user = useSelector( state => state.logged_user ); // from Redux Store

    const [enteredTask,setEnteredTask] = useState('');
    const [enteredDesc,setenteredDesc] = useState('');

    const TaskChangeHandler = (event) => { setEnteredTask(event.target.value);}
    const DescChangeHandler = (event) => { setenteredDesc(event.target.value);}

    const SubmitHandler = (event) => {
        event.preventDefault();
        console.log("Presed: " + current_user);
        const newTask = {
            id : uuid(),
            task : enteredTask,
            desc: enteredDesc,
            date:Date.now(),
            user: current_user

        };
        
        NewTaskHandler(newTask);
        setEnteredTask('');
        setenteredDesc('')
    }

  return (

    <div>
      <div className ='Add_form' >
                <form className='form' onSubmit={SubmitHandler}>
                    <input type="text" placeholder ='Enter Task Name' onChange={TaskChangeHandler} value = {enteredTask} required></input>
                    <input type="text" placeholder ='Enter Description' onChange={DescChangeHandler} value = {enteredDesc} required></input>
                     <button  on type="submit">ADD</button>
                </form>
            </div>
    </div>
  )
}

export default NewTask

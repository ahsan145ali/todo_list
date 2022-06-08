import React , {useState} from 'react'
import './NewTask.css';
import uuid from 'react-uuid';


const NewTask = ({ NewTaskHandler}) => {
    
  
    const [enteredTask,setEnteredTask] = useState('');
    const [enteredDesc,setenteredDesc] = useState('');

    const TaskChangeHandler = (event) => { setEnteredTask(event.target.value);}
    const DescChangeHandler = (event) => { setenteredDesc(event.target.value);}

    const SubmitHandler = (event) => {
        event.preventDefault();

        const newTask = {
            id : uuid(),
            task : enteredTask,
            desc: enteredDesc,
            date:Date.now()

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

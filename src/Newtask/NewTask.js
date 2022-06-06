import React , {useState} from 'react'
import './NewTask.css';
const NewTask = ({ NewTaskHandler}) => {
    const [enteredID,setEnteredID] = useState('');
    const [enteredTask,setEnteredTask] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

  
    const IDChangeHandler = (event) => { setEnteredID(event.target.value);}
    const TaskChangeHandler = (event) => { setEnteredTask(event.target.value);}
    const DateChangeHandler = (event) => { setEnteredDate(event.target.value);}

    const SubmitHandler = (event) => {
        event.preventDefault();

        const newTask = {
            id : enteredID,
            task : enteredTask,
            date : new Date(enteredDate)
        };

        NewTaskHandler(newTask);
        setEnteredID('');
        setEnteredTask('');
        setEnteredTask('');
    }

  return (

    <div>
      <div className ='Add_form' >
                <form className='form' onSubmit={SubmitHandler}>
                   
                    <input type="number" placeholder ='Enter ID' onChange={IDChangeHandler} required ></input>
                    <input type="texxt" placeholder ='Enter Task Name' onChange={TaskChangeHandler} required></input>
                    <input type="date" placeholder ='Enter Date' onChange={DateChangeHandler} required></input>
                    <button type="submit">ADD</button>
                </form>
            </div>
    </div>
  )
}

export default NewTask

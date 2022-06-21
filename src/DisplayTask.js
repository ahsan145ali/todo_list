import React from 'react'
import { Card , CardContent , Typography , Button } from '@material-ui/core'
import './DisplayTask.css'
import TaskDate from './TaskDate'
import ReactTimeAgo from 'react-time-ago'
import Axios from "axios";
import { useNavigate   } from 'react-router-dom';

const DisplayTask = ({task , FetchFromDB}) => {
  const navigate = useNavigate();
  const onDeleteHandler = async () =>{
    const token = JSON.parse(localStorage.getItem('token'));
    if(token == null)
    {   
       alert('Token Expired');
        navigate('/');
    }
    else
    {
        // delete from Backend
        const url = "http://localhost:3001/delete";
        await Axios.post( url, {id:task.id})
                .then( response=>{
                      try{
                          alert('Deleted Successfully');
                          // read again 
                          FetchFromDB();
                      }catch(error){
                    alert(error);
                  }
                })
      }
  }
  return (
    <>
      <div className='task'>
      <Card className='root'>
        <CardContent>
            <div className='cardContent'>
                  <Typography variant='h4' gutterBottom>Task: {task.task}</Typography>
                  <Typography variant='h6' gutterBottom color='textSecondary'> <b>Added:</b>  <ReactTimeAgo date={task.date} locale="en-US" timeStyle="twitter"/> </Typography>
            </div>
            <Typography variant='body2' color="textSecondary" > <b>Description:</b> {task.desc}  </Typography>
            <button onClick={onDeleteHandler}>Delete</button>
          </CardContent>
      </Card>

      </div>
    </>
  )
}

export default DisplayTask

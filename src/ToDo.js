import React, { useState,useEffect } from 'react'
import { Paper } from '@material-ui/core'
import './ToDo.css';
import DisplayTask from './DisplayTask';
import NewTask from './Newtask/NewTask';
import { useSelector,useDispatch } from 'react-redux';
import Axios from "axios";
import LoadingOverlay from 'react-loading-overlay';
import {Link , useNavigate   } from 'react-router-dom';
const ToDo = () => {
   
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const ToDoList = useSelector( state => state.todos ); // from Redux Store
   const current_user = useSelector( state => state.logged_user ); // from Redux Store

   const [loading,setloading]  = useState(false);
   
    const NewTaskHandler = async (newtask) =>{

        dispatch({type:'addTask' , obj:newtask});

          const url = "http://localhost:3001/insert";
          setloading(true);
          await Axios.post( url , 
            {
              newTask:newtask
            })
            .then( response=>{
                  try{
                    FetchFromDB();
                    setloading(false);
                  }catch(error){
                alert(error);
              }
            }
            )
    }
    const SetToDoList = (newtask)=>{
      dispatch({type:'addfromDB' , obj:newtask});
    }

    const FetchFromDB = async ()=>
    {

      const url = "http://localhost:3001/read";
      setloading(true);
      await Axios.get(url , { params : {useremail: current_user } }).then((response)=>{
        
            try{
                  dispatch({type:'emptyList'});
                  const {data} = response;
                  Object.keys(data).forEach(function(key){SetToDoList(data[key])});
                  setloading(false);
            }catch(error){

            }
      })
    }
    useEffect( ()=>{  // read from MongoDB on first reload
      if(current_user == "")
      {
        navigate('/');
      }else{
         FetchFromDB();
      }
    },[])

  return (
    <div className='MAIN' >
        <div className='NewTask'>
        <NewTask NewTaskHandler = {NewTaskHandler} />
        </div>
      {loading? 
              <div className='overlay'>
              <LoadingOverlay active = {true} spinner text="loading" className='spinner'></LoadingOverlay>
              </div>
      : 
            <div className='Tasks'>
            <Paper  className='paper' variant="elevation" elevation={21} >
              {[...ToDoList].reverse().map((TASK)=>(
                  <div key={TASK.id} className="Display">
                      <DisplayTask task= {TASK} FetchFromDB = {FetchFromDB}/>
                      
                      <br/> 
                  </div>
              ))}
              </Paper>
            </div>}
      {/*<LoadingOverlay active = {true} spinner text="loading"></LoadingOverlay>
     { loading ? <h2>IS LOADING</h2> : <h2>LOADED</h2>}*/}
    </div>
  )
}

export default ToDo;

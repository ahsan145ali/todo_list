import { createStore } from 'redux';


const  initialState = {
    todos:[
           
    ] ,
    logged_user : ""
}
const redux = require('redux');

const TaskReducer = (state = initialState, action) =>
{   
    if(action.type==='addTask')
    {
        console.log("Action: " + action.obj.task);
    return{
        ...state,
        todos : [
            ...state.todos,
            {
                id : action.obj.id,
                task : action.obj.task,
                desc : action.obj.desc,
                date: action.obj.date,
                user: action.obj.user
            }
        ],
        
        
     };
    }
    else if(action.type==='addfromDB')
    {
        return{
            ...state,
            todos : [
                ...state.todos,
                {
                    id : action.obj._id,
                    task : action.obj.TaskName,
                    desc : action.obj.Task_Description,
                    date: action.obj.Date_Added,
                    user: action.obj.User
                }
            ],
            
            
         };
    }
    else if(action.type==='emptyList')
    {
        return{
            ...state,
            todos:[
          
            ],
           
            
        };
    }
    else if(action.type==='loggedUser')
    {   
        console.log("RASN");
        return{
            ...state,
            logged_user : action.obj
        };
    }
     return state;
};

const store = createStore(TaskReducer);
const TaskSubscriber = () =>{
  

}

export default store;
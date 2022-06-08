import { createStore } from 'redux';


const  initialState = {
    todos:[
           
    ]
}
const redux = require('redux');

const TaskReducer = (state = initialState, action) =>
{   
    if(action.type==='addTask')
    {
    return{
        todos : [
            ...state.todos,
            {
                id : action.obj.id,
                task : action.obj.task,
                desc : action.obj.desc,
                date: action.obj.date
            }
        ]
        
     };
    }
    
     return state;
};

const store = createStore(TaskReducer);
const TaskSubscriber = () =>{
  

}

export default store;
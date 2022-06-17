import { Button } from '@material-ui/core';
import React, { useState , useEffect} from 'react';
import {Link , useNavigate   } from 'react-router-dom';
import Axios from "axios";
import './Login.css';
import { useSelector,useDispatch } from 'react-redux';
const Login = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const logged_user = useSelector( state => state.logged_user ); // from Redux Store

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [decision , setDecision] = useState(true);

    const onEmailChangeHandler = (event) => { setEmail(event.target.value);}
    const onPasswordChangeHandler = (event) => { setPassword(event.target.value);}

    const onLoginHandler = async (event) =>{
        event.preventDefault();
        const url = "http://localhost:3001/login";
        await Axios.post( url , 
            {
                Email: email,
                Password: password,
            })
            .then(response=>{
                try{
                    alert(response.data.msg);
                    if(response.data.status){ //Log in Success
                        
                        dispatch({type:'loggedUser' , obj:email});
                        var  TOKEN = { _token: response.data.token  ,  dec_token:response.data.dec.username }
                        localStorage.setItem('token',JSON.stringify(TOKEN));
                        
                        navigate('/ToDo');

                    }
                }catch(err){

                }
            })
            
    }

    const  onSignUpHandler = async (event) =>{
        event.preventDefault();
        const url = "http://localhost:3001/signup";
        await Axios.post( url , 
            {
                Email: email,
                Password: password,
            })
            .then( response=>{
                  try{
                        if(response.data == "err")
                        {
                            alert("Email Already Exsits Try Logging In");  
                        }
                        else
                        {
                            alert("Sign Up Successfull , Login Now");    
                        }
                        setEmail('');
                        setPassword('');
                        setDecision(true);

                  }catch(error){
                        alert(error);
              }
            }
            )
    }

    const onLoginDecisionHandler = (event)=>{
        event.preventDefault();
        setDecision(true);
    }

    const onSignUpDecisionHandler = (event)=>{
        event.preventDefault();
        setDecision(false);
    }

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('token'));
        if(token)
        {   
            dispatch({type:'loggedUser' , obj:token.dec_token});
            navigate('/ToDO');
        }
        else
        {
            console.log("Token not found");
        }
    },[]);

    let UserForm
    {   if(decision)
        {
            UserForm=
            <div className='add_form' style={{backgroundColor:'rgb(55, 89, 117)'}}>
            <form className='u_form' onSubmit={onLoginHandler}>
            <input type="email" required placeholder='Enter Email' onChange={onEmailChangeHandler} value= {email}></input>
            <input type="password" required placeholder='Enter Password' onChange={onPasswordChangeHandler} value={password}></input>
            <button type="submit">Login</button>
            </form>
            </div>
        }
        else{
            UserForm=
            <div className='add_form' style={{backgroundColor:'rgb(201, 95, 95)'}}>
            <form className='u_form' onSubmit={onSignUpHandler}>
            <input type="email" required placeholder='Enter Email' onChange={onEmailChangeHandler} value= {email}></input>
            <input type="password" required placeholder='Enter Password' onChange={onPasswordChangeHandler} value={password}></input>
            <button type="submit">SignUp</button>
            </form>
            </div>
        }
    }
    
  return (
    
    <div>
      <div style={{marginTop:'100px'}}></div>
       
       <div className='Box'>
            <div className='decision_buttons'>
                <button onClick={onLoginDecisionHandler}>Login</button>
                <button onClick={onSignUpDecisionHandler}>Signup</button>
            </div>
            
            
                {UserForm}
            
          
       </div>
      
    </div>
  )
}

export default Login

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () =>
{   
    const navigate = useNavigate();

    const onLogoutHandler = (event) =>{
        event.preventDefault();
        localStorage.setItem('token',JSON.stringify(null));
        navigate('/');
    }
    return(
        <>
            <AppBar className='appBar' color='primary'>
                <Toolbar>   
                    <Typography variant='h6' className='title' color='inherit'>
                        <img src='https://cdn.iconscout.com/icon/free/png-64/to-do-list-3524114-2947644.png' 
                                className='image' alt='ToDo List' height="25px" />
                            <Button component={Link} to='/ToDo'>ToDo List</Button>
                    </Typography>
                    <div className='grow'/>
                    <Button component={Link} to = '/AboutUS'>About US</Button>
                    <Button onClick={onLogoutHandler} >LogOut</Button>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
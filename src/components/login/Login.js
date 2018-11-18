import React from 'react';
import './Login.css';

const Login = (props)=>{
    setTimeout(()=>{
        props.history.push('/')
    },2000)
    return(
        <div className='Login'>
            <p>Login Works</p>
        </div>
    )
}

export default Login;
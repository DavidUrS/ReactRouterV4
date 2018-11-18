import React from 'react';
import './Dashboard.css';

const Dashboard = (props)=>{
    setTimeout(()=>{
        props.history.push('/')
    },2000)
    return(
        <div className='Dashboard'>
            <p>Dashboard works!</p>
        </div>
    )
}

export default Dashboard;
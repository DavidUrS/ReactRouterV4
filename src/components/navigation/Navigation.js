import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ()=>{
    return(
        <div>
            <NavLink to='dash'>To Dashboard</NavLink>|
            <NavLink to='login'>To Login</NavLink>
        </div>
    )
}

export default Navigation;
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navigation = ()=>{
    return(
        <div>
             <nav>
                <div className="nav-wrapper blue darken-4">
                <NavLink to="/" className="brand-logo">Home</NavLink>
                <ul id="nav-mobile" className="right">
                    <li><NavLink to="/dash">Dashboard</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Navigation);
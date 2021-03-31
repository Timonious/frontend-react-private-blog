import React from 'react'
import {NavLink, Link} from "react-router-dom";
import './topnav.css'
function TopNav({ isAuthenticated, toggleIsAuthenticated }) {
function handleLogoutClick() {
        toggleIsAuthenticated(false)
    }
    return (
        <nav id='nav-bar-wrap'>
            <ul id='nav-bar'>
                <li><NavLink exact to="/" activeClassName="active-link">Home</NavLink></li>
                {isAuthenticated===true && <li><NavLink to="/blog-posts" activeClassName="active-link">Blogposts</NavLink></li>
                   }
                {!isAuthenticated ? <li key='login-link'><NavLink to="/login" activeClassName="active-link" >Login</NavLink></li> : <li key='logout-link'><Link to='/'><button  id='logout-button' onClick={handleLogoutClick}>Logout</button></Link></li>}
            </ul>
        </nav>
    );
}

export default TopNav;
import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Home from './pages/home/Home'
import BlogPost from './pages/blogposts/BlogPost'
import Login from './pages/login/Login'
import TopNav from "./components/TopNav";
import Blog from "./pages/blog/Blog";
import './App.css';

function App() {
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    return (

        <Router>
            <TopNav isAuthenticated={isAuthenticated} toggleIsAuthenticated={toggleIsAuthenticated}/>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/login'>
                    <Login isAuthenticated={isAuthenticated} toggleIsAuthenticated={toggleIsAuthenticated}/>
                </Route>
                <Route path='/blog-posts'>
                    {!isAuthenticated ? <Redirect to='/'/> : <BlogPost/>}
                </Route>
                <Route path='/blog/:id'>
                    {!isAuthenticated ? <Redirect to='/'/> : <Blog/>}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
// import FullPost from './FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }
    render () {
        return (
            <div className="Blog">
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink 
                                to="/posts/" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: "#FA923F",
                                    textDecoration: "underline"
                                }}>Posts</NavLink>
                        </li>
                        <li>
                            <NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" render={() => <h1>New Post 1</h1>}/>
                <Route path="/new-post" render={() => <h1>New Post</h1>}/> */}
                
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null} 
                    <Route path="/posts/" component={Posts}/>
                    <Route render={() => <h1>You need to authenticate to access this route!</h1>}/>
                    {/* <Route path="/" component={Posts}/> */}
                    {/* <Redirect from='/' to='/posts/'/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;
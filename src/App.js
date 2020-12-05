import React from 'react'
import {Link, BrowserRouter,Route} from 'react-router-dom'
import Home from './Home'
import UserLists from './UserLists'
import UserPosts from './UserPosts'
import ShowDetails from './ShowDetails'
import Showuser from './Showuser'


const App=(props)=>{
    return (<div> 
        <BrowserRouter>
        <Link to="/">Home</Link>|<Link to="/users">Users</Link>|<Link to="/posts">Posts</Link>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/users" component={UserLists} exact={true}/>
        <Route path="/posts" component={UserPosts} exact={true}/> 
        <Route path='/users/:id' component={Showuser} exact={true}/>
        <Route path='/posts/:id' component={ShowDetails} exact={true}/>
    </BrowserRouter>    
    </div>)
}

export default App
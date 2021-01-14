import React from 'react'
import {Link, BrowserRouter,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './style/App.css'
import Home from './Home'
import UserLists from './UserLists'
import UserPosts from './UserPosts'
import ShowDetails from './ShowDetails'
import Showuser from './Showuser'
import Header from './Header'
import Navbar from './NavBar'


const App=(props)=>{
    return (<div className="container"> 
        <Header/>
        <Navbar/>
        <BrowserRouter>
        <div class="jumbotron" style={{ backgroundColor : "#00ff40",height: '2px',width:"100%"}}>
        <div className="row">
        <div className="col-md-4">
        <Link to="/">Home</Link>
        </div>
        <div className="col-md-4">
        <Link to="/users">Users</Link>
        </div>
        <div className="col-md-4">
        <Link to="/posts">Posts</Link> 
        </div> 
        </div>
        </div>
       
        
        <Route path="/" component={Home} exact={true}/>
        <Route path="/users" component={UserLists} />
        <Route path="/posts" component={UserPosts} exact={true}/> 
        <Route path='/users/:id' component={Showuser} />
        <Route path='/posts/:id' component={ShowDetails} />
    </BrowserRouter> 
    <div class="footer">
        <p>Copyright © 2021 Code gallery</p>
    </div>
    </div>)
}

export default App
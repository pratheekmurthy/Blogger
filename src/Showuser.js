import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Showuser=(props)=>{
const {id}=props.match.params
const[user,setUser]=useState({})
const [posts,setPosts]=useState([])

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=>{
        const result=response.data
        setUser(result)
    })
    .catch((err)=>{
        alert(err.message)
    })
},[])

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((response)=>{
        const result=response.data
        setPosts(result)
    })
    .catch((err)=>{
        alert(err.message)
    })
},[])
    
return(
        <div>
            <div class="card"  style={{width: "30rem",position:'absolute',left:"700px",top:"160px"}}>
  <h5 class="card-header">Author: {user.name}</h5>
  <div class="card-body">
    <h5 class="card-title">Post written by user :</h5>
    <ul>
                {
                    posts.map((ele)=>{
                        return <li key={ele.id}><Link to={`/posts/${id}`}>{ele.title} </Link> </li>
                    })
                }
            </ul>
  </div>
</div>
            
        </div>
    )

}

export default Showuser
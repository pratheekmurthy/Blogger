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
            <h1>USER NAME:{user.name}</h1>
            <h2>POSTS WRITTEN BY USER</h2>
            <ul>
                {
                    posts.map((ele)=>{
                        return <li key={ele.id}><Link to={`/posts/${id}`}>{ele.title} </Link> </li>
                    })
                }
            </ul>
        </div>
    )

}

export default Showuser
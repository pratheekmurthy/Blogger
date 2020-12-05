import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ShowDetails=(props)=>{
    const {id}=props.match.params
    const [post,setPost]=useState({})
    const [user,setuser]=useState({})
    const[comments,setComments ]=useState([])

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=>{
        const result=response.data
        setuser(result)
    })
},[])

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response)=>{
        const result=response.data
        setPost(result)
    })
    .catch((err)=>{
        alert(err.message)
    })
},[])

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then((response)=>{
        const result=response.data
        setComments(result)
    })
},[])



    return(
        <div>
            <h2>USER NAME:{user.name} </h2>
            <h2>TITLE:{post.title} </h2>
            <h3>BODY:</h3>
            <h3>{post.body} </h3>
            <hr/>
            <h1>Comments</h1>
            <ul>
            {
                comments.map((ele)=>{
                    return <li key={ele.id}>{ele.body} </li>
                })
            }
            </ul>
            <hr/>
        <Link to={`/users/${id}`}>More posts of author:{user.name}</Link>
        </div>
    )
}

export default ShowDetails
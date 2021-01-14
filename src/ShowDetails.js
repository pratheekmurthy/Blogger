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
            <div class="card">
  <h5 class="card-header">Author:{user.name}</h5>
  <div class="card-body">
    <h5 class="card-title">Title: {post.title} </h5>
    <h4>Body : {post.body}</h4>
    <hr/>
    <h3>Comments :</h3>
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
</div>
 </div>
    )
}

export default ShowDetails
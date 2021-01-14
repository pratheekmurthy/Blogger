import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Posts=(props)=>{
    const{id}=props.match.params
    const[post,setPost]=useState([])
    useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((responce)=>{
        const result=responce.data
        setPost(result)
    }) 
    },[])
    
    return(
        <div>
            <div class="card">
            <h5 class="card-header">Total Posts:{post.length}</h5>
            <div class="card-body">
            <ul>
            {
                post.map((ele)=>{
                    return <li key={ele.id}><Link to={`/posts/${ele.userId}`}> {ele.title}</Link> </li>
                })
            }
            </ul>
            </div>
</div>  
 </div>
    )
}

export default Posts
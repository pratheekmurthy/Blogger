import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const UsersList=(props)=>{
    const[users,setUsers]=useState([])
    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        const result=response.data
        setUsers(result)
    })
    },[])
    return(
        <div style={{width: "35rem",backgroundColor : "#bfff00"}}>
            <div class="card" style={{width: "35rem"}}>
            <h5 class="card-header">Total Users-{users.length}</h5>
            <div class="card-body">
            <ul>
                {
                    users.map((ele)=>{
                        return <li key={ele.id}><Link to={`/users/${ele.id}`}>{ele.name}</Link></li>
                    })
                }
            </ul>
            </div>
            </div>   
        </div>
    )
}

export default UsersList
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
        <div>
            <h1>UsersList-{users.length}</h1>
            <ul>
                {
                    users.map((ele)=>{
                        return <li key={ele.id}><Link to={`/users/${ele.id}`}>{ele.name}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export default UsersList
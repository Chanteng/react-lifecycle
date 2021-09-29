import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';

function UserFunction() {
    const [user, setUsers] = useState([])

    async function getUsers() {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers (res.data)
    }

    useEffect (() => {
        getUsers();
       return (
           setUsers([])
       )
    }, [])

    return (
       user.map((user) => {
           return <>
               <h1>Function Component</h1>
           <h1 key={user.id}>{user.name}</h1>
           <h1 key={user.id}>{user.username}</h1>
           <h1 key={user.id}>{user.email}</h1>
           </>
       })
        
    )
}

export default UserFunction;

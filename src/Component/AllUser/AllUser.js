import React, { useEffect } from 'react';
import { useState } from 'react';

const AllUser = () => {

    const [users, setUsers]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    //delete 

    const handleDeleteUser = id =>{
        const proceed = window.confirm( ' Are you sure, you want to delete?')
        if(proceed){
            const url =`http://localhost:5000/users/${id}`;
            fetch(url,{
            method:'DELETE'
            })
            .then(res => res.json())
            .then( data =>{
                if(data.deletedCount >0){
                    alert('One Data Deleted');
                    const remaingUsers = users.filter(user => user._id !== id);
                    setUsers(remaingUsers)
                }
            })
        }
    }

    return (
        <div>
            <h3>This is all user</h3>
            <p>Number of users : {users.length}</p>
            {
                users.map(user => <li>
                    {user.name} 
                    <button>Update</button>
                    <button onClick={()=> handleDeleteUser(user._id)}>delete</button>
                </li>)
            }
        </div>
    );
};

export default AllUser;
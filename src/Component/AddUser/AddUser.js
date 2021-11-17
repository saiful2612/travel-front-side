import React from 'react';
import { useRef } from 'react';
import './AddUser.css';

const AddUser = () => {

    const nameRef= useRef();
    const emailRef= useRef();
    const handleUser= e =>{
        e.preventDefault();
        const name =nameRef.current.value;
        const email =emailRef.current.value;

        const newUser = {name, email}

        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Successfull added user')
                e.target.reset();
            }
        })
    }
    return (
        <div className="container add-user">
            <h2>This is add user section</h2>

            <form onSubmit={handleUser}>
                <input type="text" ref={nameRef} required/>
                <input type="email" ref={emailRef} required/>
                <input type="submit" value="Add user"/>
            </form>
        </div>
    );
};

export default AddUser;
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Base from '../Core/base';
import { Button, TextField } from '@mui/material';

const EditUser = ({user,setUser}) => {
    
const history = useHistory();

    const[idx,setIdx] = useState();
    const[name,setName] = useState();
    const[batch,setBatch] = useState();
    const[email,setEmail] = useState();
    const[exp,setExp] = useState();

    const{id}= useParams();

    const selectedUser = user.find((per)=>per.id == id);

    useEffect(()=> {
        setIdx (selectedUser.id);
        setBatch(selectedUser.batch)
        setName (selectedUser.name)
        setEmail(selectedUser.email)
        setExp(selectedUser.experience)

    },[]);
    

    const updateUser = ()=>{
           
        //step: collecting new data

        const editIndex = user.findIndex((per)=>per.id == id)

        // changed data in input field
        const editedUser = {
            id :idx,
            name,
            exp,
            batch,
            email,
            
        }

        // updating the user

        user[editIndex] = editedUser
        setUser([...user])
        history.push('/')
    }

  return (
    <Base
     title='Edit User'>
     <div className="form">

     {/* 
       <label>Id</label> {' '}
       <input type='text' placeholder="ID" value={idx}
       onChange={(event)=>(setIdx(event.target.value))}
       required/>*/}

       <TextField fullWidth id="fullWidth"
       label="ID" 
       variant="outlined"
       value={idx}
       onChange={(event)=>(setIdx(event.target.value))} />

       <TextField fullWidth id="fullWidth"
            label="name" 
            variant="outlined"
            value={name} 
            onChange={(event)=>(setName(event.target.value))} />

        <TextField fullWidth id="fullWidth"
            label="batch" 
            variant="outlined"
            value={batch} 
            onChange={(event)=>(setBatch(event.target.value))}/>

        <TextField fullWidth id="fullWidth"
            label="email address" 
            variant="outlined"
            value={email} 
            onChange={(event)=>(setEmail(event.target.value))}/>

        <TextField fullWidth id="fullWidth"
            label="experience" 
            variant="outlined"
            value={exp}
            onChange={(event)=>(setExp(event.target.value))}/>

        <Button variant="contained" color="secondary"
            onClick = {updateUser}>Edit</Button>

       {/*<label>NAME</label>{' '}
       <input type='text' placeholder="name" value={name} 
       onChange={(event)=>(setName(event.target.value))}
       required/>

       <label>Batch</label>{' '}
       <input type='text' placeholder="Batch" value={batch} 
       onChange={(event)=>(setBatch(event.target.value))}
       required/>

       <label>Email</label>{' '}
       <input type='email' placeholder="email address" value={email} 
       onChange={(event)=>(setEmail(event.target.value))}
       required/>

       <label>Experience</label>{' '}
       <input type='number' placeholder="experience" value={exp}
       onChange={(event)=>(setExp(event.target.value))}
       required/><br></br><br></br>

       <button className="edit"
       onClick={updateUser}>Edit</button> */}

        
      </div>
   </Base>
  )
}

export default EditUser
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Core/base";


// 3 ways t0 write component
// 1. const AddUser = ()=>( )

// 2. const AddUser = function(){ return() }  

//3.

function AddUser({user,setUser}){
    const [id,setId] = useState();
    const[name,setName] = useState();
    const[batch,setBatch] = useState();
    const[email,setEmail] = useState();
    const[exp,setExp] = useState();

    const history = useHistory();

    const addNewUser= ()=>{
        const newUser={
            id,name,batch,email,exp
        }
       setUser([...user,newUser])

       // to empty input field after the user gives value
       setId('');
       setName('');
       setBatch('');
       setEmail('');
       setExp('')

      history.push('/')

      alert('User Added Successfully')

    }
    

    return(
        <Base
        title='Add New User'>
       <div className="form">
           <label>Id</label> {' '}
           <input type='text' placeholder="ID" value={id}
           onChange={(event)=>(setId(event.target.value))}
           required/>

           <label>NAME</label>{' '}
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

           <button className="add"
           onClick = {addNewUser}>Add</button>
            
       </div>
       </Base>
    )
}

export default AddUser
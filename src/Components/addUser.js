import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Core/base";
import { Button, TextField } from "@mui/material";
import * as yup from 'yup'
import { useFormik } from "formik";

// 3 ways t0 write component
// 1. const AddUser = ()=>( )

// 2. const AddUser = function(){ return() }  

//3.

const userSchemaValidation = yup.object({
  name : yup.string().required("Enter you name"),
  id : yup.string().required("Enter a number"),
  batch : yup.string().required("Enter your batch").min(5,"Not a valid batch name"),
  email : yup.string().email().required("Enter a valid email"),
  experience : yup.number().required("Enter your experience")
})


function AddUser({user,setUser}){

  //formik validations

const {values,handleChange,handleSubmit,handleBlur,errors,touched} = useFormik({

       initialValues :{
        id : "",
        name : "",
        email : "",
        experience : "",
        batch : ""
       },

       validationSchema : userSchemaValidation,
       
       onSubmit : (newUser) => {
         console.log("onsubmit triggered :", newUser)
       }


})
    // const [id,setId] = useState();
    // const[name,setName] = useState();
    // const[batch,setBatch] = useState();
    // const[email,setEmail] = useState();
    // const[exp,setExp] = useState();

    const history = useHistory();

    const addNewUser= (e)=>{
        const newUser={
            // id,name,batch,email,exp
        }
        // e.preventDefault();

       setUser([...user,newUser])

       // to empty input field after the user gives value
      //  setId('');
      //  setName('');
      //  setBatch('');
      //  setEmail('');
      //  setExp('')

      history.push('/')

      alert('User Added Successfully')

    }
    

    return(
        <Base
        title='Add New User'>
       
       <form className="form" onSubmit={handleSubmit}>
          {/* <label>Id</label> {' '}
           <input type='text' placeholder="ID" value={id}
           onChange={(event)=>(setId(event.target.value))}
           required/>*/}

           <TextField fullWidth id="fullWidth"
            label="ID" 
            name  = "id"
            variant="outlined"
            // value={id}
            value={values.id}
            onChange={handleChange}
            onBlur={handleBlur}
            // onChange={(event)=>(setId(event.target.value))} 
            />
            {touched.id && errors.id ? <span>{errors.id}</span> : ""}

           {/*<label>NAME</label>{' '}
           <input type='text' placeholder="name" value={name} 
           onChange={(event)=>(setName(event.target.value))}
           required/>*/}

           <TextField fullWidth id="fullWidth"
            label="name" 
            name = "name"
            variant="outlined"
            // value={name} 
            value={values.name}
            // onChange={(event)=>(setName(event.target.value))} 
            onChange={handleChange}
            onBlur={handleBlur}/>
            {touched.name && errors.name ? <span>{errors.name}</span> : ""}

           {/* <label>Batch</label>{' '}
           <input type='text' placeholder="Batch" value={batch} 
           onChange={(event)=>(setBatch(event.target.value))}
        required/>*/}

          <TextField fullWidth id="fullWidth"
            label="batch" 
            name = "batch"
            variant="outlined"
            // value={batch} 
            value={values.batch} 
            // onChange={(event)=>(setBatch(event.target.value))}/>
            onChange={handleChange}
            onBlur={handleBlur}/>
            {touched.batch && errors.batch ? <span>{errors.batch}</span> : ""}

           {/*<label>Email</label>{' '}
           <input type='email' placeholder="email address" value={email} 
           onChange={(event)=>(setEmail(event.target.value))}
           required/>*/}

           <TextField fullWidth id="fullWidth"
            label="email address" 
            name = "email"
            variant="outlined"
            // value={email} 
            value={values.email}
            // onChange={(event)=>(setEmail(event.target.value))}/>
            onChange={handleChange}
            onBlur={handleBlur}/>
            {touched.email && errors.email ? <span>{errors.email}</span> : ""}

           {/*<label>Experience</label>{' '}
           <input type='number' placeholder="experience" value={exp}
           onChange={(event)=>(setExp(event.target.value))}
        required/>  <br></br><br></br>*/}

           <TextField fullWidth id="fullWidth"
            label="experience" 
            name = "experience"
            variant="outlined"
            // value={exp}
            value={values.experience}
            // onChange={(event)=>(setExp(event.target.value))}/>
            onChange={handleChange}
            onBlur={handleBlur}/>
            {touched.experience && errors.experience ? <span>{errors.experience}</span> : ""}


           {/*<button className="add"
         onClick = {addNewUser}>Add</button>*/}

           <Button variant="contained" color="success" type = "submit"
            // onClick = {addNewUser}
            >Add</Button>
            </form> 
       
       </Base>
    )
}

export default AddUser
import React from "react";
import { useHistory } from "react-router-dom";
import Base from "../Core/base";



function UserComponent({user,setUser}){

    const history = useHistory();

    // delete button functionality
    const deleteUser = (idx)=>{
        const newList = user.filter((person)=> person.id !== idx)
        setUser(newList)
    }


    return(
        <Base
        title = "User Details">

        <div className="user-content">
        {
            user.map((item,idx)=>(
                <div className="user-card" key ={idx}>
                <h1>{item.name}</h1>
                <p> <span style={{fontWeight:'bolder'}}>Batch : </span>{item.batch}</p>
                <p><span style={{fontWeight:'bolder'}}>Email : </span>{item.email}</p>
                <p><span style={{fontWeight:'bolder'}}>Experience : </span>{item.experience}</p>
                <div className="btn-group">
                    <button 
                    className="btn-edit"
                    onClick={()=>history.push(`/edit/${item.id}`)}
                    >Edit</button>{" "}
                    
                    <button 
                    className="btn-view"
                    onClick={()=>history.push(`/user/${idx}`)}
                    >View</button> {' '}

                    <button 
                    className="btn-del"
                    onClick={()=>deleteUser(item.id)}
                    >Delete</button>
                </div>

                </div>
            ))
        }
        </div>
        
        </Base>
       
    )
}

export default UserComponent
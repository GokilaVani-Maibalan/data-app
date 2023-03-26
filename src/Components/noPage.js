import React from "react";
import { useHistory } from "react-router-dom";

function NoPage(){
    const history = useHistory();

    return(
        <div>
        <p>404 Not Found</p>
        <button
        onClick={()=>history.push('/')}>Dashboard</button>
        </div>
    )
}

export default NoPage
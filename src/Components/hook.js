import React, { useRef, useState } from 'react'
import Base from "../Core/base";
import { useEffect } from 'react';
import { useReducer } from 'react';
import { useMemo } from 'react';


const Hook = () => {

    //USE STATE HOOK
     const [count,setCount] = useState(0);

    function Add(){

        // adding using asynchronous
        setCount(count+1)

        // adding two times synchronous 
        //    setCount((prev) => prev +1)
        //    setCount((prev) => prev +1)
    }

    function Sub(){
        setCount(count-1)
    }

    //USE EFFECT HOOK
    useEffect(()=>{

     console.log('called')

     //unmounting
        // return ()=>{console.log('unmounted')}

        refCount.current = refCount.current +1 ;
    },[count])
    

    //USE REDUCER

    const reducerState = {counter : 0}

    /* Example of action - action is like an Object 
         const action = {
            name : "sanjay" ,  name is like  type : "add-counter"
            age : 24           age is like  payload : 10. There can be any name instead of payload
         }
    */

    const reducer = (state,action)=>{
             switch(action.type){

                case "add-counter" :
                    return {...state, counter : state.counter + 1}

                case "sub-counter" :
                    return {...state, counter : state.counter - 1}

                case "reset" :
                    return {...state, counter : action.payload}
                default:
                    return state 
             }

    }

    const[state,dispatch] = useReducer(reducer, reducerState)

    //USE REF
    const refCount = useRef (0);

    const eleRef = useRef();
    const refFocus  = () => {
        eleRef.current.focus()
        console.log(eleRef.current)
    }


    //USE MEMO
    const handleChange = useMemo(()=>{
        // for(let i=0; i<1000000; i++){}
        return count * 2
    },[count])
  return (
    <Base
    title="Hook Concepts" >
    <div> 
    <div>
    <h1> Use State </h1>
    <button onClick={Add}> Add </button> {" "}
    <span> count {count} </span> {' '}
    <button onClick={Sub}> Sub </button>
    </div>

    <div>
    <h1>Use Reducers</h1>
    <p> Reducer count {state.counter} </p>
    <button onClick={()=>dispatch({type:"add-counter"})}> Add </button>{' '}
    <button onClick={()=>dispatch({type:"sub-counter"})}> Sub </button> {' '}
    <button onClick={()=>dispatch({type:"reset" , payload : 5})}> Reset </button>
    </div>

    <div>
    <h1> Use Ref </h1>
    <p>Rendering count : {refCount.current}</p>
    <input ref={eleRef}/> {' '}
    <button onClick={refFocus}> Focus </button>
    </div>

    <div>
    <h1> Use Memo </h1>
    <p>{handleChange}</p>
    </div>
    </div>
    
    </Base>
  )
}

export default Hook
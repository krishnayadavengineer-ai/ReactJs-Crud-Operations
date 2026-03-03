import React, { useState } from 'react'
import { UserData } from './Example1';
import Example3 from './Example3';

const Example2 = () => {
    const[details,setDetails]=useState({
        name:"",
        location:""
    });

   const handleChange=(e)=>{
        setDetails({...details, [e.target.name] :e.target.value})
    }
  return (
    <div>
       <UserData.Provider value={details}>
      <input name='name' onChange={handleChange} value={details.name}></input>
      <input name='location'  onChange={handleChange} value={details.location}></input>
      <Example3></Example3>
      </UserData.Provider>
    </div>
  )
}

export default Example2

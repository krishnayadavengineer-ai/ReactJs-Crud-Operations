import React, { useRef } from 'react'

const Example22 = () => {
   const inputdata= useRef();



   const handleData=()=>{
    console.log("Input value : "+inputdata.current.value)
   }
  return (
    <div>
      <input type='name' ref={inputdata}></input>
      <button type='submit' onClick={handleData}>submit</button>
    </div>
  )
}

export default Example22

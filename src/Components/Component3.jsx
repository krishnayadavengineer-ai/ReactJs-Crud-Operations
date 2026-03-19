import React, { useState } from 'react'

const Component3 = () => {
    const[num,setNum]=useState(0);
  return (
    <div>
        <p>{num}</p>
      <button onClick={()=>setNum(num+1)}>Increment</button>
      <button onClick={()=>setNum(num == 0 ? 0:num-1)}>Decrement</button>
    </div>
  )
}

export default Component3

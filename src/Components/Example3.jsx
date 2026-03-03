import React, { useContext } from 'react'
import { UserData } from './Example1'

const Example3 = () => {
   const{name,location}= useContext(UserData);
  return (
    <div>
      <p>name:{name}</p>
      <p>location:{location}</p>
    </div>
  )
}

export default Example3

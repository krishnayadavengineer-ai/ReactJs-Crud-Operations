import React, { useContext } from 'react'
import { NameContext } from './Componenet1'

const Component2 = () => {

    const name=useContext(NameContext);
  return (
    <div>
      <p>my name is {name}</p>
    </div>
  )
}

export default Component2

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NameContext } from './Components/Componenet1'
import Component2 from './Components/Component2'
import Example2 from './Components/Example2'

function App() {
  const [count, setCount] = useState(0)
  const [name,setName]=useState();
  return (
    <>
      <div>
        {/* <NameContext.Provider value={name} >
           <input type='text' placeholder='enter_name' onChange={(e)=>setName(e.target.value)}></input>
          <Component2></Component2>
        </NameContext.Provider> */}

        <Example2></Example2>
      </div>
    </>
  )
}

export default App

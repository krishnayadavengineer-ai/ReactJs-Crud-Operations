import React, { useState } from 'react'

const Example2 = () => {
    const [eData, setEData] = useState();
    const [inputData, setInputData] = useState();
    

    const handleChange = (e) => {
        setEData(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setInputData(eData)

    }
    const handleReset = () => {
        setInputData(" ")
        setEData("")
    }
    return (
        <div>
            <p>{inputData}</p>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={eData}></input>
                <button type='submit'>submit</button>
                <button type='reset' onClick={handleReset}>Reset</button>
            </form>
        </div>
    )
}

export default Example2

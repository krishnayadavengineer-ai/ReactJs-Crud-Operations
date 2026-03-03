import React, { useState } from 'react'
import axios from 'axios'
const InsertPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    location: "",
    email: ""
  })


  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (k) => {
    k.preventDefault();
    try {
      await axios.post("http://localhost:8080/student", userDetails)
      alert("inserted")
    } catch (error) {
      console.error("not inserted", error)
    }


  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' onChange={handleChange} placeholder='entername' value={userDetails.name} />
        <input type="text" name='location' onChange={handleChange} placeholder='enterlocation' value={userDetails.location} />
        <input type="text" name='email' onChange={handleChange} placeholder='enter email' value={userDetails.email} />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default InsertPage

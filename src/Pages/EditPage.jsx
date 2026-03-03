import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const EditPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [editData, setEditData] = useState({
        name: "",
        location: "",
        email: ""
    })


    //Step1-> getting Details First
    useEffect(() => {
        const getDataFrom = async () => {
            const res = await axios.get(`http://localhost:8080/get/${id}`)
            setEditData(res.data)
        }
        getDataFrom();
    }, [id])


    //Step->2 then setDetails here 
    const handleChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value })

    }


    //step->3 then update data 
    const handleSubmit = async () => {
        const res = await axios.put(`http://localhost:8080/updateDetails/${id}`)
        setEditData(res.data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name='name' value={editData.name} />
                <input type="text" onChange={handleChange} name='location' value={editData.location} />
                <input type="text" onChange={handleChange} name='email' value={editData.email} />
                <button type='submit'>updateDetails</button>
            </form>
        </div>
    )
}

export default EditPage

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ListOfData = () => {
    const [studentData, setStudentData] = useState([])


    useEffect(() => {
        const getDetails = async () => {
            const res = await axios.get("http://localhost:8080/getAll")
            setStudentData(res.data)

        }
        getDetails();
    },[])



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>location</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {studentData.map((studentData) => (
                        <tr key={studentData.id}>
                            <td>{studentData.id}</td>
                            <td>{studentData.name}</td>
                            <td>{studentData.location}</td>
                            <td>{studentData.email}</td>
                        </tr>

                    ))}
                </tbody>

                {/* {studentData.map((data)=>(
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                ))} */}
            </table>
        </div>
    )
}

export default ListOfData

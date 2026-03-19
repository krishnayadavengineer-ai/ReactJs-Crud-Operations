import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ListOfData = () => {
    const [studentData, setStudentData] = useState([])

    //axios
    useEffect(() => {
        const getDetails = async () => {
            const res = await axios.get("http://localhost:8080/getAll")
            setStudentData(res.data)

        }
        getDetails();
    }, [])

    // // fetch
    // useEffect(() => {
    //     const datGet = () => {
    //         fetch("http://localhost:8080/getAll")
    //             .then(res => res.json())
    //             .then(data => setStudentData(data))
    //     }
    //     datGet();
    // }, [])




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
                    {/* {studentData.map((studentData) => (
                        <tr key={studentData.id}>
                            <td>{studentData.id}</td>
                            <td>{studentData.name}</td>
                            <td>{studentData.location}</td>
                            <td>{studentData.email}</td>
                        </tr>

                    ))} */}

                    {studentData.map((details) => (
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    )

                    )}
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

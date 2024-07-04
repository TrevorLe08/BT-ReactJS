import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Employee() {
    let navigate = useNavigate()
    const employees = [
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ]
    return (
        <div>
            <h2>Employee</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((item,index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td><button onClick={() => {
                                navigate(`/employee/${item.id}`)
                            }}>Detail</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

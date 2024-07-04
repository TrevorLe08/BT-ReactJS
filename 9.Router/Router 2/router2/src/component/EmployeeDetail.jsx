import React from 'react'
import { useParams } from 'react-router-dom'
export default function EmployeeDetail() {
    const { id } = useParams()
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
        <>
            <div>
                <h2>Detail employee {id}</h2>
                <p>ID: {employees[id-1].id}</p>
                <p>Name: {employees[id-1].name}</p>
                <p>Age: {employees[id-1].age}</p>
            </div>
        </>
    )
}

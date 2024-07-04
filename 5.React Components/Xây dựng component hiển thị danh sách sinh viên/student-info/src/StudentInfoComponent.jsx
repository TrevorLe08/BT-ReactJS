import React, { Component } from 'react'

export default class StudentInfoComponent extends Component {
    constructor() {
        super()
        this.state = {
            students: [
                {
                    id: 1,
                    name: "LTMT",
                    age: 16,
                    address: "Đà Lạt"
                }, {
                    id: 2,
                    name: "NVA",
                    age: 25,
                    address: "TP.HCM"
                }, {
                    id: 3,
                    name: "NTL",
                    age: 18,
                    address: "Đà Nẵng"
                }, {
                    id: 4,
                    name: "ĐPGH",
                    age: 30,
                    address: "Hà Nội"
                }
            ]
        }
    }
    render() {
        return (
            <>
                <h2>List student</h2>
                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((item, index) => (
                            <tr>
                                <th scope="row" key={index}>{item.id}</th>
                                <td key={index}>{item.name}</td>
                                <td key={index}>{item.age}</td>
                                <td key={index}>{item.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}


import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const CallingApi = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        console.log()
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log("heloo data orey rarababu", response)
        setData(response.data)
    }

    return (
        <div>
            <h1>hello</h1>
            <button onClick={fetchData}>callApi</button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>usename</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        data && data.map((each, idx) => (
                           
                            (
                                <tr key={idx}>
                                    <td>{each.id}</td>
                                    <td>{each.name}</td>
                                    <td>{each.email}</td>
                                </tr>
                            )
                        )
                        )
                    }
                </tbody>
            </Table>

        </div>
    )
}
export default CallingApi;

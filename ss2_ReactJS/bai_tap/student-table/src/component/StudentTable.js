import React from "react";
import { students } from "../service/student";

function StudentTable() {
    return (
        <>
            <h1>Bảng học sinh</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.company}</td>
                            <td>{item.contact}</td>
                            <td>{item.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default StudentTable;
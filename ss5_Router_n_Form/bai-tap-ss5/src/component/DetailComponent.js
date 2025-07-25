import { useParams } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import { useEffect, useState } from "react";
import { findById } from "../service/students";

const DetailComponent = () => {

    const { id } = useParams();
    const [student, setStudent] = useState({ id: 0, name: '', email: '' });

    useEffect(() => {
        setStudent(findById(id));
    }, []);

    return (
        <table>
            <tbody>
                <tr>
                    <td>ID:</td>
                    <td>{student.id}</td>
                </tr>
                <tr>
                    <td>Name:</td>
                    <td>{student.name}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{student.email}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default DetailComponent;
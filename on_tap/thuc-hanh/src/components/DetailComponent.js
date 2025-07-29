import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import studentService from "../service/studentService";

const DetailComponent = () => {
    const {id} = useParams();
    const [student, setStudent] = useState({id: 0, name: '', age: 0, gender: false, classCG: {}, subjects: [], address: ''});

    useEffect(() => {
        const fetchData = async () => {
            setStudent(await studentService.findById(id));
        }

        fetchData();
    }, [])


    return(
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan={2}>Thông tin sinh viên</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tên sinh viên: </td>
                        <td>{student.name}</td>
                    </tr>
                    <tr>
                        <td>Ngày sinh: </td>
                        <td>{student.dateOfBirth}</td>
                    </tr>
                    <tr>
                        <td>Tuổi: </td>
                        <td>{student.age}</td>
                    </tr>
                    <tr>
                        <td>Giới tính: </td>
                        <td>{student.gender ? 'Nam': 'Nữ'}</td>
                    </tr>
                    <tr>
                        <td>Lớp: </td>
                        <td>{student.classCG.name}</td>
                    </tr>
                    <tr>
                        <td>Môn học: </td>
                        <td>{student.subjects}</td>
                    </tr>
                    <tr>
                        <td>Địa chỉ: </td>
                        <td>{student.address}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DetailComponent;
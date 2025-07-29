import { useEffect, useState } from "react";
import studentService from '../service/studentService';
import { Link } from "react-router-dom";

const ListComponent = () => {
    const [studentList, setStudentList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await studentService.findAll();
            setStudentList(result);
            
        }

        fetchData();
    }, [])

    return (
        <table className="table table-danger table-active">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Tuổi</th>
                    <th scope="col">Giới tính</th>
                    <th scope="col">Lớp</th>
                    <th scope="col">Ngày sinh</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col">Thao tác</th>
                </tr>
            </thead>
            <tbody>
                {studentList.map((student, index) => 
                    (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender ? 'Nam' : 'Nữ'}</td>
                            <td>{student.classCG.name}</td>
                            <td>{student.dateOfBirth}</td>
                            <td>{student.address}</td>
                            <td>
                                <Link to={"/detail/" + student.id} className="btn btn-secondary">Chi tiết</Link>
                                <Link to={"/update/" + student.id} className="btn btn-primary">Cập nhật</Link>
                                <button className="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    )
}

export default ListComponent;
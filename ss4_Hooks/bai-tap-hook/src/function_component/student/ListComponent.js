import { useEffect, useState } from "react";
import { getAll, add } from "../service/students";
import AddComponent from "./AddComponent";
import DeleteComponent from "./DeleteComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const ListComponent = () => {
    const [studentList, setStudentList] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({id: 0, name: '', email: ''});

    useEffect(() => {
        setStudentList([...getAll()]);
    }, [])

    useEffect(() => {
        setStudentList([...getAll()]);
    }, [isUpdate, isShowModal])

const handleShowModal = (student) => {
    setIsShowModal(prev => !prev);
    setDeleteStudent(student);
}

const handleCloseModal = () => {
    setIsShowModal(prev => !prev);
}

    return (
        <>
            <AddComponent setIsUpdate={setIsUpdate}/>
            <table className="table table-dark" border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td><button className="btn btn-danger" onClick={() => {handleShowModal(student)}}>Xóa</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <DeleteComponent 
                    isShowModal={isShowModal}
                    handleCloseModal={handleCloseModal}
                    deleteStudent={deleteStudent} />
        </>
    )
}

export default ListComponent;
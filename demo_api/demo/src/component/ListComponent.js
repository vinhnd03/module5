import { useEffect, useRef, useState } from "react";
import { getAll, add, findByName } from "../service/students";
import { Link } from "react-router-dom";
import DeleteComponent from "./DeleteComponent";

const ListComponent = () => {
    const [studentList, setStudentList] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({ id: 0, name: '', email: '' });
    const searchRef = useRef();


    // useEffect(() => {
    //     setStudentList([...getAll()]);
    // }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await getAll();
    //         setStudentList(...result);
    //     }

    //     fetchData();
    // }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await getAll();
    //         setStudentList([...result]);
    //     }

    //     fetchData();
    // }, [isUpdate, isShowModal])

    useEffect(() => {
        const fetchData = async () => {
            getAll().then((data) => {
                setStudentList([...data]);
            })
        }

        fetchData();
    }, [isUpdate, isShowModal])

    const handleShowModal = (student) => {
        setIsShowModal(prev => !prev);
        setDeleteStudent(student);
    }

    const handleCloseModal = () => {
        setIsShowModal(prev => !prev);
    }

    const handleSearch = () => {
        let searchName = searchRef.current.value;

        const fetchData = async () => {
            const searchList = await findByName(searchName);
            setStudentList(searchList);
        }

        fetchData();
    }

    return (
        <>
            {/*  <AddComponent setIsUpdate={setIsUpdate}/> */}
            <div className="d-flex">
                <input ref={searchRef} name="searchName" className="form-control w-25" placeholder="nhập tên..." />
                <button type="button" className="btn btn-warning" onClick={handleSearch}>Search</button>
            </div>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Giới tính</th>
                        <th>Mộn học</th>
                        <th>Lớp</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {(studentList.length === 0) ?
                        <tr>
                            <td colSpan={5}>
                                <div className="text-center">
                                    Danh sách trống
                                </div>

                            </td>
                        </tr>
                        :
                        studentList.map((student, index) => (
                            <tr key={student.id}>
                                <td>{index + 1}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.gender}</td>
                                <td>{student.subjects}</td>
                                <td>{student.classCG.name}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => { handleShowModal(student) }}>Xóa</button>
                                    <Link className="btn btn-secondary" to={`/detail/${student.id}`}>Chi tiết</Link>
                                    <Link className="btn btn-primary" to={`/update/${student.id}`}>Sửa</Link>
                                </td>
                            </tr>
                        ))
                    }

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
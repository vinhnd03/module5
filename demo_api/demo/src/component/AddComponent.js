import { useNavigate } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify'
import * as Yup from 'yup';
import { add } from "../service/students";
import { getAll } from "../service/classCG";
import subjectService from '../service/subjects';

const AddComponent = () => {
    const navigate = useNavigate();
    const [student, setStudent] = useState({ id: 0, name: '', email: '', gender: 'true', subjects: [], classCG: '' });
    const [classList, setClassList] = useState([]);
    const [subjectList, setSubjectList] = useState([]);

    const handleAdd = async (value) => {
        console.log(value.classCG);

        if (!value.classCG) {
            value = {
                ...value,
                classCG: classList[0]
            }
        } else {
            value = {
                ...value,
                classCG: JSON.parse(value.classCG)
            }
        }

        await add(value);

        navigate("/list");
        toast.success("Thêm mới thành công");
    }

    useEffect(() => {
        const fetchData = async () => {
            const classes = await getAll();
            setClassList(classes);

            const subjects = await subjectService.getAll();
            setSubjectList(subjects);
        }

        fetchData();
    }, []);

    const handleValidate = Yup.object({
        name: Yup.string().required("Tên không được bỏ trống"),
        email: Yup.string().required("Email không được bỏ trống").matches(/^\w+@\w+(\.\w+)+$/, "Email không đúng định dạng"),
    })

    return (
        <Formik initialValues={student} onSubmit={handleAdd} validationSchema={handleValidate}>
            <Form>
                <label>Nhập tên</label>
                <Field type="text" className="form-control w-25" name="name" /><br />
                <ErrorMessage name="name" component={'div'} style={{ color: 'red' }} />
                <label>Nhập email</label>
                <Field type="text" className="form-control w-25" name="email" /><br />
                <ErrorMessage name="email" component={'div'} style={{ color: 'red' }} />
                <label>Giới tính</label><br/>
                <Field type="radio" value="true" name="gender" className="form-check-input"/> Nam &emsp;
                <Field type="radio" value="false" name="gender" className="form-check-input"/> Nữ<br/><br/>
                <label>Môn học</label><br/>
                {subjectList.map(subject => 
                    <span key={subject.id}>
                        <Field type="checkbox" value={subject.name} name="subjects" className="form-check-input"/> {subject.name} &emsp;
                    </span>
                )}
                <br/><br/>
                <label>Chọn lớp</label>
                <Field as="select" className="form-select w-25" name="classCG">
                    {classList.map(cls =>
                        <option value={JSON.stringify(cls)} key={cls.id}>{cls.name}</option>
                    )}
                </Field>
                
                <button className="btn btn-success w-25" type="submit">Save</button>
            </Form>
        </Formik>
    )
}

export default AddComponent;